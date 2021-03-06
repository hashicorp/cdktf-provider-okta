// https://www.terraform.io/docs/providers/okta/d/idp_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaIdpSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_saml#id DataOktaIdpSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_saml#name DataOktaIdpSaml#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/idp_saml okta_idp_saml}
*/
export class DataOktaIdpSaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_saml";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/idp_saml okta_idp_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaIdpSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaIdpSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_saml',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_binding - computed: true, optional: false, required: false
  public get acsBinding() {
    return this.getStringAttribute('acs_binding');
  }

  // acs_type - computed: true, optional: false, required: false
  public get acsType() {
    return this.getStringAttribute('acs_type');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // id - computed: false, optional: true, required: false
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

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // issuer_mode - computed: true, optional: false, required: false
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sso_binding - computed: true, optional: false, required: false
  public get ssoBinding() {
    return this.getStringAttribute('sso_binding');
  }

  // sso_destination - computed: true, optional: false, required: false
  public get ssoDestination() {
    return this.getStringAttribute('sso_destination');
  }

  // sso_url - computed: true, optional: false, required: false
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }

  // subject_filter - computed: true, optional: false, required: false
  public get subjectFilter() {
    return this.getStringAttribute('subject_filter');
  }

  // subject_format - computed: true, optional: false, required: false
  public get subjectFormat() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_format'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
