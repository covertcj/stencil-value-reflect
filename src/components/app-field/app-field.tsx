import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-field',
  shadow: true
})
export class AppHome {
  @Prop({
    reflectToAttr: true,
    mutable: true
  })
  value: string

  @Prop({
    reflectToAttr: true,
    mutable: true
  })
  otherValue: string

  render() {
    return (
      <div class='app-field'>
        <input type='text' value={this.value} onInput={e => this.value = (e.target as HTMLInputElement).value} />
        <input type='text' value={this.otherValue} onInput={e => this.otherValue = (e.target as HTMLInputElement).value} />
      </div>
    );
  }
}

