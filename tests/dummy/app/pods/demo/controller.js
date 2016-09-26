import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  simpleContent: ['Test content'],
  horizontalContent: ['Horrizontal content'],
  largerHorizontalContent: ['Horrizooooooooooooooooooooooooooooooooontal content'],
  verticalContent: ['Pod expands based on content.', 've', 'rt', 'ic', 'al'],
  largerVerticalContent: ['Pod expands based on content.', 'v', 'e', 'r', 't', 'i', 'c', 'a', 'l',
                          'v', 'e', 'r', 't', 'i', 'c', 'a', 'l']
})
