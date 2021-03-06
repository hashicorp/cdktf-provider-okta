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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
export interface DomainDnsRecords {
}

export function domainDnsRecordsToTerraform(struct?: DomainDnsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DomainDnsRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DomainDnsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDnsRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DomainDnsRecordsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DomainDnsRecordsOutputReference {
    return new DomainDnsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/domain okta_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_domain";

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
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateSourceType = config.certificateSourceType;
    this._id = config.id;
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
  private _dnsRecords = new DomainDnsRecordsList(this, "dns_records", false);
  public get dnsRecords() {
    return this._dnsRecords;
  }

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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      verify: cdktf.booleanToTerraform(this._verify),
    };
  }
}
