// https://www.terraform.io/docs/providers/okta/r/captcha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CaptchaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha#id Captcha#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the CAPTCHA
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha#name Captcha#name}
  */
  readonly name: string;
  /**
  * Secret key issued from the CAPTCHA vendor to perform server-side validation for a CAPTCHA token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha#secret_key Captcha#secret_key}
  */
  readonly secretKey: string;
  /**
  * Site key issued from the CAPTCHA vendor to render a CAPTCHA on a page
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha#site_key Captcha#site_key}
  */
  readonly siteKey: string;
  /**
  * Captcha type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha#type Captcha#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/captcha okta_captcha}
*/
export class Captcha extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_captcha";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/captcha okta_captcha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CaptchaConfig
  */
  public constructor(scope: Construct, id: string, config: CaptchaConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_captcha',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._name = config.name;
    this._secretKey = config.secretKey;
    this._siteKey = config.siteKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      site_key: cdktf.stringToTerraform(this._siteKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
