// https://www.terraform.io/docs/providers/okta/r/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Certificate source type that indicates whether the certificate is provided by the user or Okta. Accepted values: MANUAL, OKTA_MANAGED. Warning: Use of OKTA_MANAGED requires a feature flag to be enabled. Default value = MANUAL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/domain#certificate_source_type Domain#certificate_source_type}
  */
  readonly certificateSourceType?: string;
  /**
  * Custom Domain name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Indicates whether the domain should be verified during creation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/domain#verify Domain#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
}
export class DomainDnsRecords extends cdktf.ComplexComputedList {

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/domain okta_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/domain okta_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_domain',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateSourceType = config.certificateSourceType;
    this._name = config.name;
    this._verify = config.verify;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_source_type - computed: false, optional: true, required: false
  private _certificateSourceType?: string; 
  public get certificateSourceType() {
    return this.getStringAttribute('certificate_source_type');
  }
  public set certificateSourceType(value: string) {
    this._certificateSourceType = value;
  }
  public resetCertificateSourceType() {
    this._certificateSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSourceTypeInput() {
    return this._certificateSourceType;
  }

  // dns_records - computed: true, optional: false, required: false
  public dnsRecords(index: string) {
    return new DomainDnsRecords(this, 'dns_records', index, false);
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

  // validation_status - computed: true, optional: false, required: false
  public get validationStatus() {
    return this.getStringAttribute('validation_status');
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_source_type: cdktf.stringToTerraform(this._certificateSourceType),
      name: cdktf.stringToTerraform(this._name),
      verify: cdktf.booleanToTerraform(this._verify),
    };
  }
}
