/* eslint camelcase: off */

export default class AlertModel {
  constructor(id, code, backgroundColor, actions, overlayContent) {
    this.actions = actions;
    this.backgroundColor = backgroundColor;
    this.code = code;
    this.id = id;
    this.overlayContent = overlayContent;
  }
}
