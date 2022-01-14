// https://www.terraform.io/docs/providers/okta/r/template_sms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateSmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * SMS default template
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_sms#template TemplateSms#template}
  */
  readonly template: string;
  /**
  * SMS template type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_sms#type TemplateSms#type}
  */
  readonly type: string;
  /**
  * translations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_sms#translations TemplateSms#translations}
  */
  readonly translations?: TemplateSmsTranslations[];
}
export interface TemplateSmsTranslations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_sms#language TemplateSms#language}
  */
  readonly language: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_sms#template TemplateSms#template}
  */
  readonly template: string;
}

export function templateSmsTranslationsToTerraform(struct?: TemplateSmsTranslations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/template_sms okta_template_sms}
*/
export class TemplateSms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_template_sms";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/template_sms okta_template_sms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateSmsConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateSmsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_template_sms',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._template = config.template;
    this._type = config.type;
    this._translations = config.translations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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

  // translations - computed: false, optional: true, required: false
  private _translations?: TemplateSmsTranslations[]; 
  public get translations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('translations') as any;
  }
  public set translations(value: TemplateSmsTranslations[]) {
    this._translations = value;
  }
  public resetTranslations() {
    this._translations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationsInput() {
    return this._translations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      template: cdktf.stringToTerraform(this._template),
      type: cdktf.stringToTerraform(this._type),
      translations: cdktf.listMapper(templateSmsTranslationsToTerraform)(this._translations),
    };
  }
}
