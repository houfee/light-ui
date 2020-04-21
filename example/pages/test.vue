<template>
  <lgt-page type="picker-view" title="Picker" desc="">
    <div slot="content">
      <lgt-button-group>
        <lgt-button type="warning" @click="showPicker">Picker</lgt-button>
        <lgt-button type="warning" @click="showMutiPicker">Multi-column Picker</lgt-button>
        <lgt-button type="warning" @click="showAliasPicker">Use alias</lgt-button>
        <lgt-button type="warning" @click="showUpdatePropsPicker">Use $updateProps</lgt-button>
        <lgt-button type="warning" @click="showSubtitlePicker">Use subtitle</lgt-button>
      </lgt-button-group>
    </div>
  </lgt-page>
</template>

<script type="text/ecmascript-6">
  import LgtPage from 'example/components/lgt-page.vue'
  import LgtButtonGroup from 'example/components/lgt-button-group.vue'
  import { column1, column2, column3 } from 'example/data/picker'

  export default {
    methods: {
      showPicker() {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: 'Picker',
            data: [column1],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.picker.show()
      },
      showMutiPicker() {
        if (!this.mutiPicker) {
          this.mutiPicker = this.$createPicker({
            title: 'Multi-column Picker',
            data: [column1, column2],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.mutiPicker.show()
      },
      showAliasPicker() {
        if (!this.aliasPicker) {
          this.aliasPicker = this.$createPicker({
            title: 'Use Alias',
            data: [[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]],
            alias: {
              value: 'id',
              text: 'name'
            },
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.aliasPicker.show()
      },
      showSetDataPicker() {
        if (!this.setDataPicker) {
          this.setDataPicker = this.$createPicker({
            title: 'Use SetData',
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.setDataPicker.setData([column1, column2, column3], [1, 2, 3])
        this.setDataPicker.show()
      },
      showUpdatePropsPicker() {
        if (!this.updatePropsPicker) {
          this.updatePropsPicker = this.$createPicker({
            title: 'Use $updateProps',
            data: [column1],
            selectedIndex: [0],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.updatePropsPicker.show()
        setTimeout(() => {
          this.updatePropsPicker.$updateProps({
            title: 'Updated',
            data: [column1, column2, column3],
            selectedIndex: [1, 2, 3]
          })
        }, 1000)
      },
      showSubtitlePicker() {
        if (!this.subtitlePicker) {
          this.subtitlePicker = this.$createPicker({
            title: 'Picker',
            subtitle: 'subtitle',
            data: [column1],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.subtitlePicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    },
    components: {
      LgtPage,
      LgtButtonGroup
    }
  }
</script>
