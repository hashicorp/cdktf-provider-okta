// https://www.terraform.io/docs/providers/okta/r/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * User Okta admin roles - ie. ['APP_ADMIN', 'USER_ADMIN']
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#admin_roles User#admin_roles}
  */
  readonly adminRoles?: string[];
  /**
  * User city
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#city User#city}
  */
  readonly city?: string;
  /**
  * User cost center
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#cost_center User#cost_center}
  */
  readonly costCenter?: string;
  /**
  * User country code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#country_code User#country_code}
  */
  readonly countryCode?: string;
  /**
  * JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#custom_profile_attributes User#custom_profile_attributes}
  */
  readonly customProfileAttributes?: string;
  /**
  * User department
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#department User#department}
  */
  readonly department?: string;
  /**
  * User display name, suitable to show end users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#display_name User#display_name}
  */
  readonly displayName?: string;
  /**
  * User division
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#division User#division}
  */
  readonly division?: string;
  /**
  * User primary email address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#email User#email}
  */
  readonly email: string;
  /**
  * User employee number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#employee_number User#employee_number}
  */
  readonly employeeNumber?: string;
  /**
  * If set to `true`, the user will have to change the password at the next login. This property will be used when user is being created and works only when `password` field is set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#expire_password_on_create User#expire_password_on_create}
  */
  readonly expirePasswordOnCreate?: boolean | cdktf.IResolvable;
  /**
  * User first name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#first_name User#first_name}
  */
  readonly firstName: string;
  /**
  * The groups that you want this user to be a part of. This can also be done via the group using the `users` property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#group_memberships User#group_memberships}
  */
  readonly groupMemberships?: string[];
  /**
  * User honorific prefix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#honorific_prefix User#honorific_prefix}
  */
  readonly honorificPrefix?: string;
  /**
  * User honorific suffix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#honorific_suffix User#honorific_suffix}
  */
  readonly honorificSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User last name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * User default location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#locale User#locale}
  */
  readonly locale?: string;
  /**
  * User Okta login
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#login User#login}
  */
  readonly login: string;
  /**
  * Manager of User
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#manager User#manager}
  */
  readonly manager?: string;
  /**
  * Manager ID of User
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#manager_id User#manager_id}
  */
  readonly managerId?: string;
  /**
  * User middle name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#middle_name User#middle_name}
  */
  readonly middleName?: string;
  /**
  * User mobile phone number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#mobile_phone User#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * User nickname
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#nick_name User#nick_name}
  */
  readonly nickName?: string;
  /**
  * Old User Password. Should be only set in case the password was not changed using the provider
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#old_password User#old_password}
  */
  readonly oldPassword?: string;
  /**
  * User organization
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#organization User#organization}
  */
  readonly organization?: string;
  /**
  * User Password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#password User#password}
  */
  readonly password?: string;
  /**
  * When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#password_inline_hook User#password_inline_hook}
  */
  readonly passwordInlineHook?: string;
  /**
  * User mailing address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#postal_address User#postal_address}
  */
  readonly postalAddress?: string;
  /**
  * User preferred language
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#preferred_language User#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * User primary phone number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#primary_phone User#primary_phone}
  */
  readonly primaryPhone?: string;
  /**
  * User online profile (web page)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#profile_url User#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * User Password Recovery Answer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#recovery_answer User#recovery_answer}
  */
  readonly recoveryAnswer?: string;
  /**
  * User Password Recovery Question
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#recovery_question User#recovery_question}
  */
  readonly recoveryQuestion?: string;
  /**
  * User secondary email address, used for account recovery
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#second_email User#second_email}
  */
  readonly secondEmail?: string;
  /**
  * User state or region
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#state User#state}
  */
  readonly state?: string;
  /**
  * The status of the User in Okta - remove to set user back to active/provisioned
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#status User#status}
  */
  readonly status?: string;
  /**
  * User street address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#street_address User#street_address}
  */
  readonly streetAddress?: string;
  /**
  * User default timezone
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#timezone User#timezone}
  */
  readonly timezone?: string;
  /**
  * User title
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#title User#title}
  */
  readonly title?: string;
  /**
  * User employee type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#user_type User#user_type}
  */
  readonly userType?: string;
  /**
  * User zipcode or postal code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#zip_code User#zip_code}
  */
  readonly zipCode?: string;
  /**
  * password_hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#password_hash User#password_hash}
  */
  readonly passwordHash?: UserPasswordHash;
}
export interface UserPasswordHash {
  /**
  * The algorithm used to generate the hash using the password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#algorithm User#algorithm}
  */
  readonly algorithm: string;
  /**
  * Only required for salted hashes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#salt User#salt}
  */
  readonly salt?: string;
  /**
  * Specifies whether salt was pre- or postfixed to the password before hashing
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#salt_order User#salt_order}
  */
  readonly saltOrder?: string;
  /**
  * For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used). This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#value User#value}
  */
  readonly value: string;
  /**
  * Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user#work_factor User#work_factor}
  */
  readonly workFactor?: number;
}

export function userPasswordHashToTerraform(struct?: UserPasswordHashOutputReference | UserPasswordHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    salt: cdktf.stringToTerraform(struct!.salt),
    salt_order: cdktf.stringToTerraform(struct!.saltOrder),
    value: cdktf.stringToTerraform(struct!.value),
    work_factor: cdktf.numberToTerraform(struct!.workFactor),
  }
}

export class UserPasswordHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserPasswordHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._salt !== undefined) {
      hasAnyValues = true;
      internalValueResult.salt = this._salt;
    }
    if (this._saltOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.saltOrder = this._saltOrder;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._workFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.workFactor = this._workFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPasswordHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._salt = undefined;
      this._saltOrder = undefined;
      this._value = undefined;
      this._workFactor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._salt = value.salt;
      this._saltOrder = value.saltOrder;
      this._value = value.value;
      this._workFactor = value.workFactor;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // salt - computed: false, optional: true, required: false
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // salt_order - computed: false, optional: true, required: false
  private _saltOrder?: string; 
  public get saltOrder() {
    return this.getStringAttribute('salt_order');
  }
  public set saltOrder(value: string) {
    this._saltOrder = value;
  }
  public resetSaltOrder() {
    this._saltOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltOrderInput() {
    return this._saltOrder;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // work_factor - computed: false, optional: true, required: false
  private _workFactor?: number; 
  public get workFactor() {
    return this.getNumberAttribute('work_factor');
  }
  public set workFactor(value: number) {
    this._workFactor = value;
  }
  public resetWorkFactor() {
    this._workFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workFactorInput() {
    return this._workFactor;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/user okta_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/user okta_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user',
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
    this._adminRoles = config.adminRoles;
    this._city = config.city;
    this._costCenter = config.costCenter;
    this._countryCode = config.countryCode;
    this._customProfileAttributes = config.customProfileAttributes;
    this._department = config.department;
    this._displayName = config.displayName;
    this._division = config.division;
    this._email = config.email;
    this._employeeNumber = config.employeeNumber;
    this._expirePasswordOnCreate = config.expirePasswordOnCreate;
    this._firstName = config.firstName;
    this._groupMemberships = config.groupMemberships;
    this._honorificPrefix = config.honorificPrefix;
    this._honorificSuffix = config.honorificSuffix;
    this._id = config.id;
    this._lastName = config.lastName;
    this._locale = config.locale;
    this._login = config.login;
    this._manager = config.manager;
    this._managerId = config.managerId;
    this._middleName = config.middleName;
    this._mobilePhone = config.mobilePhone;
    this._nickName = config.nickName;
    this._oldPassword = config.oldPassword;
    this._organization = config.organization;
    this._password = config.password;
    this._passwordInlineHook = config.passwordInlineHook;
    this._postalAddress = config.postalAddress;
    this._preferredLanguage = config.preferredLanguage;
    this._primaryPhone = config.primaryPhone;
    this._profileUrl = config.profileUrl;
    this._recoveryAnswer = config.recoveryAnswer;
    this._recoveryQuestion = config.recoveryQuestion;
    this._secondEmail = config.secondEmail;
    this._state = config.state;
    this._status = config.status;
    this._streetAddress = config.streetAddress;
    this._timezone = config.timezone;
    this._title = config.title;
    this._userType = config.userType;
    this._zipCode = config.zipCode;
    this._passwordHash.internalValue = config.passwordHash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_roles - computed: false, optional: true, required: false
  private _adminRoles?: string[]; 
  public get adminRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_roles'));
  }
  public set adminRoles(value: string[]) {
    this._adminRoles = value;
  }
  public resetAdminRoles() {
    this._adminRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRolesInput() {
    return this._adminRoles;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // cost_center - computed: false, optional: true, required: false
  private _costCenter?: string; 
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }
  public set costCenter(value: string) {
    this._costCenter = value;
  }
  public resetCostCenter() {
    this._costCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCenterInput() {
    return this._costCenter;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // custom_profile_attributes - computed: false, optional: true, required: false
  private _customProfileAttributes?: string; 
  public get customProfileAttributes() {
    return this.getStringAttribute('custom_profile_attributes');
  }
  public set customProfileAttributes(value: string) {
    this._customProfileAttributes = value;
  }
  public resetCustomProfileAttributes() {
    this._customProfileAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileAttributesInput() {
    return this._customProfileAttributes;
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // division - computed: false, optional: true, required: false
  private _division?: string; 
  public get division() {
    return this.getStringAttribute('division');
  }
  public set division(value: string) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // employee_number - computed: false, optional: true, required: false
  private _employeeNumber?: string; 
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }
  public set employeeNumber(value: string) {
    this._employeeNumber = value;
  }
  public resetEmployeeNumber() {
    this._employeeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeNumberInput() {
    return this._employeeNumber;
  }

  // expire_password_on_create - computed: false, optional: true, required: false
  private _expirePasswordOnCreate?: boolean | cdktf.IResolvable; 
  public get expirePasswordOnCreate() {
    return this.getBooleanAttribute('expire_password_on_create');
  }
  public set expirePasswordOnCreate(value: boolean | cdktf.IResolvable) {
    this._expirePasswordOnCreate = value;
  }
  public resetExpirePasswordOnCreate() {
    this._expirePasswordOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirePasswordOnCreateInput() {
    return this._expirePasswordOnCreate;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // group_memberships - computed: false, optional: true, required: false
  private _groupMemberships?: string[]; 
  public get groupMemberships() {
    return cdktf.Fn.tolist(this.getListAttribute('group_memberships'));
  }
  public set groupMemberships(value: string[]) {
    this._groupMemberships = value;
  }
  public resetGroupMemberships() {
    this._groupMemberships = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipsInput() {
    return this._groupMemberships;
  }

  // honorific_prefix - computed: false, optional: true, required: false
  private _honorificPrefix?: string; 
  public get honorificPrefix() {
    return this.getStringAttribute('honorific_prefix');
  }
  public set honorificPrefix(value: string) {
    this._honorificPrefix = value;
  }
  public resetHonorificPrefix() {
    this._honorificPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificPrefixInput() {
    return this._honorificPrefix;
  }

  // honorific_suffix - computed: false, optional: true, required: false
  private _honorificSuffix?: string; 
  public get honorificSuffix() {
    return this.getStringAttribute('honorific_suffix');
  }
  public set honorificSuffix(value: string) {
    this._honorificSuffix = value;
  }
  public resetHonorificSuffix() {
    this._honorificSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificSuffixInput() {
    return this._honorificSuffix;
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

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // manager - computed: false, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: string; 
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }
  public set managerId(value: string) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // middle_name - computed: false, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }

  // mobile_phone - computed: false, optional: true, required: false
  private _mobilePhone?: string; 
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }
  public set mobilePhone(value: string) {
    this._mobilePhone = value;
  }
  public resetMobilePhone() {
    this._mobilePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneInput() {
    return this._mobilePhone;
  }

  // nick_name - computed: false, optional: true, required: false
  private _nickName?: string; 
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }
  public set nickName(value: string) {
    this._nickName = value;
  }
  public resetNickName() {
    this._nickName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameInput() {
    return this._nickName;
  }

  // old_password - computed: false, optional: true, required: false
  private _oldPassword?: string; 
  public get oldPassword() {
    return this.getStringAttribute('old_password');
  }
  public set oldPassword(value: string) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_inline_hook - computed: false, optional: true, required: false
  private _passwordInlineHook?: string; 
  public get passwordInlineHook() {
    return this.getStringAttribute('password_inline_hook');
  }
  public set passwordInlineHook(value: string) {
    this._passwordInlineHook = value;
  }
  public resetPasswordInlineHook() {
    this._passwordInlineHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInlineHookInput() {
    return this._passwordInlineHook;
  }

  // postal_address - computed: false, optional: true, required: false
  private _postalAddress?: string; 
  public get postalAddress() {
    return this.getStringAttribute('postal_address');
  }
  public set postalAddress(value: string) {
    this._postalAddress = value;
  }
  public resetPostalAddress() {
    this._postalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalAddressInput() {
    return this._postalAddress;
  }

  // preferred_language - computed: false, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // primary_phone - computed: false, optional: true, required: false
  private _primaryPhone?: string; 
  public get primaryPhone() {
    return this.getStringAttribute('primary_phone');
  }
  public set primaryPhone(value: string) {
    this._primaryPhone = value;
  }
  public resetPrimaryPhone() {
    this._primaryPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPhoneInput() {
    return this._primaryPhone;
  }

  // profile_url - computed: false, optional: true, required: false
  private _profileUrl?: string; 
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }
  public set profileUrl(value: string) {
    this._profileUrl = value;
  }
  public resetProfileUrl() {
    this._profileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUrlInput() {
    return this._profileUrl;
  }

  // raw_status - computed: true, optional: false, required: false
  public get rawStatus() {
    return this.getStringAttribute('raw_status');
  }

  // recovery_answer - computed: false, optional: true, required: false
  private _recoveryAnswer?: string; 
  public get recoveryAnswer() {
    return this.getStringAttribute('recovery_answer');
  }
  public set recoveryAnswer(value: string) {
    this._recoveryAnswer = value;
  }
  public resetRecoveryAnswer() {
    this._recoveryAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryAnswerInput() {
    return this._recoveryAnswer;
  }

  // recovery_question - computed: false, optional: true, required: false
  private _recoveryQuestion?: string; 
  public get recoveryQuestion() {
    return this.getStringAttribute('recovery_question');
  }
  public set recoveryQuestion(value: string) {
    this._recoveryQuestion = value;
  }
  public resetRecoveryQuestion() {
    this._recoveryQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryQuestionInput() {
    return this._recoveryQuestion;
  }

  // second_email - computed: false, optional: true, required: false
  private _secondEmail?: string; 
  public get secondEmail() {
    return this.getStringAttribute('second_email');
  }
  public set secondEmail(value: string) {
    this._secondEmail = value;
  }
  public resetSecondEmail() {
    this._secondEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondEmailInput() {
    return this._secondEmail;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // password_hash - computed: false, optional: true, required: false
  private _passwordHash = new UserPasswordHashOutputReference(this, "password_hash");
  public get passwordHash() {
    return this._passwordHash;
  }
  public putPasswordHash(value: UserPasswordHash) {
    this._passwordHash.internalValue = value;
  }
  public resetPasswordHash() {
    this._passwordHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._adminRoles),
      city: cdktf.stringToTerraform(this._city),
      cost_center: cdktf.stringToTerraform(this._costCenter),
      country_code: cdktf.stringToTerraform(this._countryCode),
      custom_profile_attributes: cdktf.stringToTerraform(this._customProfileAttributes),
      department: cdktf.stringToTerraform(this._department),
      display_name: cdktf.stringToTerraform(this._displayName),
      division: cdktf.stringToTerraform(this._division),
      email: cdktf.stringToTerraform(this._email),
      employee_number: cdktf.stringToTerraform(this._employeeNumber),
      expire_password_on_create: cdktf.booleanToTerraform(this._expirePasswordOnCreate),
      first_name: cdktf.stringToTerraform(this._firstName),
      group_memberships: cdktf.listMapper(cdktf.stringToTerraform)(this._groupMemberships),
      honorific_prefix: cdktf.stringToTerraform(this._honorificPrefix),
      honorific_suffix: cdktf.stringToTerraform(this._honorificSuffix),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      locale: cdktf.stringToTerraform(this._locale),
      login: cdktf.stringToTerraform(this._login),
      manager: cdktf.stringToTerraform(this._manager),
      manager_id: cdktf.stringToTerraform(this._managerId),
      middle_name: cdktf.stringToTerraform(this._middleName),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      nick_name: cdktf.stringToTerraform(this._nickName),
      old_password: cdktf.stringToTerraform(this._oldPassword),
      organization: cdktf.stringToTerraform(this._organization),
      password: cdktf.stringToTerraform(this._password),
      password_inline_hook: cdktf.stringToTerraform(this._passwordInlineHook),
      postal_address: cdktf.stringToTerraform(this._postalAddress),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      primary_phone: cdktf.stringToTerraform(this._primaryPhone),
      profile_url: cdktf.stringToTerraform(this._profileUrl),
      recovery_answer: cdktf.stringToTerraform(this._recoveryAnswer),
      recovery_question: cdktf.stringToTerraform(this._recoveryQuestion),
      second_email: cdktf.stringToTerraform(this._secondEmail),
      state: cdktf.stringToTerraform(this._state),
      status: cdktf.stringToTerraform(this._status),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      timezone: cdktf.stringToTerraform(this._timezone),
      title: cdktf.stringToTerraform(this._title),
      user_type: cdktf.stringToTerraform(this._userType),
      zip_code: cdktf.stringToTerraform(this._zipCode),
      password_hash: userPasswordHashToTerraform(this._passwordHash.internalValue),
    };
  }
}
