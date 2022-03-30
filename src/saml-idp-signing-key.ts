// https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlIdpSigningKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * base64-encoded X.509 certificate chain with DER encoding
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key#x5c SamlIdpSigningKey#x5c}
  */
  readonly x5C: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key okta_saml_idp_signing_key}
*/
export class SamlIdpSigningKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_saml_idp_signing_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key okta_saml_idp_signing_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlIdpSigningKeyConfig
  */
  public constructor(scope: Construct, id: string, config: SamlIdpSigningKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_saml_idp_signing_key',
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
    this._x5C = config.x5C;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }

  // x5c - computed: false, optional: false, required: true
  private _x5C?: string[]; 
  public get x5C() {
    return cdktf.Fn.tolist(this.getListAttribute('x5c'));
  }
  public set x5C(value: string[]) {
    this._x5C = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x5CInput() {
    return this._x5C;
  }

  // x5t_s256 - computed: true, optional: false, required: false
  public get x5TS256() {
    return this.getStringAttribute('x5t_s256');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      x5c: cdktf.listMapper(cdktf.stringToTerraform)(this._x5C),
    };
  }
}
