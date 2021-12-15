// https://www.terraform.io/docs/providers/okta/r/event_hook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#auth EventHook#auth}
  */
  readonly auth?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#channel EventHook#channel}
  */
  readonly channel: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#events EventHook#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#name EventHook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#status EventHook#status}
  */
  readonly status?: string;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#headers EventHook#headers}
  */
  readonly headers?: EventHookHeaders[];
}
export interface EventHookHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#key EventHook#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html#value EventHook#value}
  */
  readonly value?: string;
}

export function eventHookHeadersToTerraform(struct?: EventHookHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html okta_event_hook}
*/
export class EventHook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_event_hook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/event_hook.html okta_event_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventHookConfig
  */
  public constructor(scope: Construct, id: string, config: EventHookConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_event_hook',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auth = config.auth;
    this._channel = config.channel;
    this._events = config.events;
    this._name = config.name;
    this._status = config.status;
    this._headers = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: { [key: string]: string } | cdktf.IResolvable; 
  public get auth() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('auth') as any;
  }
  public set auth(value: { [key: string]: string } | cdktf.IResolvable) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: { [key: string]: string } | cdktf.IResolvable; 
  public get channel() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('channel') as any;
  }
  public set channel(value: { [key: string]: string } | cdktf.IResolvable) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: EventHookHeaders[]; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: EventHookHeaders[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.hashMapper(cdktf.anyToTerraform)(this._auth),
      channel: cdktf.hashMapper(cdktf.anyToTerraform)(this._channel),
      events: cdktf.listMapper(cdktf.stringToTerraform)(this._events),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      headers: cdktf.listMapper(eventHookHeadersToTerraform)(this._headers),
    };
  }
}
