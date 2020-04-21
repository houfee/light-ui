<template>
  <transition name="lgt-picker-fade">
    <!-- Transition animation need use with v-show in the same template. -->
    <lgt-popup
      type="picker"
      :mask="true"
      :center="false"
      :z-index="zIndex"
      v-show="isVisible"
      @touchmove.prevent
      @mask-click="maskClick">
        <div style="z-index: 100;" class="lgt-picker-panel" v-show="isVisible" @click.stop>
          <div class="lgt-picker-choose">
            <div class="lgt-picker-title-group">
              <h1 class="lgt-picker-title" v-html="title"></h1>
            </div>
          </div>
          <div class="lgt-picker-content">
            <i class="border-bottom-1px"></i>
            <i class="border-top-1px"></i>
            <div class="lgt-picker-wheel-wrapper" ref="wheelWrapper">
              <div v-for="(data,index) in finalData" :key="index" :style="{ order: _getFlexOrder(data)}">
                <!-- The class name of the ul and li need be configured to BetterScroll. -->
                <ul class="lgt-picker-wheel-scroll">
                  <li v-for="(item,index) in data" :key="index" v-html="item[textKey]">
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="lgt-picker-footer">
            <span @click="hide">{{_confirmTxt}}</span>
          </div>
        </div>
    </lgt-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import LgtPopup from '../popup/popup.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import basicPickerMixin from '../../common/mixins/basic-picker'
  import pickerMixin from '../../common/mixins/picker'
  import localeMixin from '../../common/mixins/locale'

  const COMPONENT_NAME = 'lgt-picker'

  const EVENT_SELECT = 'select'
  const EVENT_VALUE_CHANGE = 'value-change'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, basicPickerMixin, pickerMixin, localeMixin],
    props: {
      pending: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        finalData: this.data.slice()
      }
    },
    created() {
      this._values = []
      this._indexes = this.selectedIndex
    },
    methods: {
      maskClick() {
        this.maskClosable && this.cancel()
      },
      
      show() {
        if (this.isVisible) {
          return
        }

        this.isVisible = true
        if (!this.wheels || this.dirty) {
          this.$nextTick(() => {
            this.wheels = this.wheels || []
            let wheelWrapper = this.$refs.wheelWrapper
            for (let i = 0; i < this.finalData.length; i++) {
              this._createWheel(wheelWrapper, i).enable()
              this.wheels[i].wheelTo(this._indexes[i])
            }
            this.dirty && this._destroyExtraWheels()
            this.dirty = false
          })
        } else {
          for (let i = 0; i < this.finalData.length; i++) {
            this.wheels[i].enable()
            this.wheels[i].wheelTo(this._indexes[i])
          }
        }
      },
      hide() {
        if (!this.isVisible) {
          return
        }
        this.isVisible = false

        for (let i = 0; i < this.finalData.length; i++) {
          this.wheels[i].disable()
        }
      },
      setData(data, selectedIndex) {
        this._indexes = selectedIndex ? [...selectedIndex] : []
        this.finalData = data.slice()
        if (this.isVisible) {
          this.$nextTick(() => {
            const wheelWrapper = this.$refs.wheelWrapper
            this.finalData.forEach((item, i) => {
              this._createWheel(wheelWrapper, i)
              this.wheels[i].wheelTo(this._indexes[i])
            })
            this._destroyExtraWheels()
          })
        } else {
          this.dirty = true
        }
      },
      refill(datas) {
        let ret = []
        if (!datas.length) {
          return ret
        }
        datas.forEach((data, index) => {
          ret[index] = this.refillColumn(index, data)
        })
        return ret
      },
      refillColumn(index, data) {
        const wheelWrapper = this.$refs.wheelWrapper
        let scroll = wheelWrapper.children[index].querySelector('.lgt-picker-wheel-scroll')
        let wheel = this.wheels ? this.wheels[index] : false
        let dist = 0
        if (scroll && wheel) {
          let oldData = this.finalData[index]
          this.$set(this.finalData, index, data)
          let selectedIndex = wheel.getSelectedIndex()
          if (oldData.length) {
            let oldValue = oldData[selectedIndex][this.valueKey]
            for (let i = 0; i < data.length; i++) {
              if (data[i][this.valueKey] === oldValue) {
                dist = i
                break
              }
            }
          }
          this._indexes[index] = dist
          this.$nextTick(() => {
            // recreate wheel so that the wrapperHeight will be correct.
            wheel = this._createWheel(wheelWrapper, index)
            wheel.wheelTo(dist)
          })
        }
        return dist
      },
      scrollTo(index, dist) {
        const wheel = this.wheels[index]
        this._indexes[index] = dist
        wheel.wheelTo(dist)
      },
      refresh() {
        this.$nextTick(() => {
          this.wheels.forEach((wheel) => {
            wheel.refresh()
          })
        })
      },
      _createWheel(wheelWrapper, i) {
        if (!this.wheels[i]) {
          console.log(this.wheels[i])
          const wheel = this.wheels[i] = new BScroll(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this._indexes[i] || 0,
              wheelWrapperClass: 'lgt-picker-wheel-scroll',
              wheelItemClass: 'lgt-picker-wheel-item'
            },
            swipeTime: this.swipeTime,
            observeDOM: false
          })
          wheel.on('scrollEnd', () => {
            console.log(EVENT_CHANGE, i, wheel.getSelectedIndex())
            this.$emit(EVENT_CHANGE, i, wheel.getSelectedIndex())
          })
        } else {
          this.wheels[i].refresh()
        }
        return this.wheels[i]
      },
      _destroyExtraWheels() {
        const dataLength = this.finalData.length
        if (this.wheels.length > dataLength) {
          const extraWheels = this.wheels.splice(dataLength)
          extraWheels.forEach((wheel) => {
            wheel.destroy()
          })
        }
      },
      _canConfirm() {
        return !this.pending && this.wheels.every((wheel) => {
          return !wheel.isInTransition
        })
      },
      _getFlexOrder(data) {
        if (data[0]) {
          return data[0][this.orderKey]
        }
        return 0
      }
    },
    beforeDestroy() {
      this.wheels && this.wheels.forEach((wheel) => {
        wheel.destroy()
      })
      this.wheels = null
    },
    components: {
      LgtPopup
    }
  }
</script>

<style lang="scss" scope>
@charset "UTF-8";
@import '../style/test';
</style>
