/* eslint camelcase: off */

export default class AlertModel {
  constructor({ alrt_key, sigla }, backgroundColor, actions, message, overlayContent) {
    this.id = alrt_key || `${sigla}-dropdownHeader`;
    this.code = sigla;
    this.backgroundColor = backgroundColor;
    this.actions = actions;
    this.message = message;
    this.overlayContent = overlayContent;
  }
}
