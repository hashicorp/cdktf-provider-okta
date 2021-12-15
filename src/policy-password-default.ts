// https://www.terraform.io/docs/providers/okta/r/policy_password_default.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyPasswordDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable voice call recovery: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#call_recovery PolicyPasswordDefault#call_recovery}
  */
  readonly callRecovery?: string;
  /**
  * Enable or disable email password recovery: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#email_recovery PolicyPasswordDefault#email_recovery}
  */
  readonly emailRecovery?: string;
  /**
  * Number of minutes before a locked account is unlocked: 0 = no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}
  */
  readonly passwordAutoUnlockMinutes?: number;
  /**
  * Check Passwords Against Common Password Dictionary.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}
  */
  readonly passwordDictionaryLookup?: boolean | cdktf.IResolvable;
  /**
  * User firstName attribute must be excluded from the password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}
  */
  readonly passwordExcludeFirstName?: boolean | cdktf.IResolvable;
  /**
  * User lastName attribute must be excluded from the password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}
  */
  readonly passwordExcludeLastName?: boolean | cdktf.IResolvable;
  /**
  * If the user name must be excluded from the password.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_exclude_username PolicyPasswordDefault#password_exclude_username}
  */
  readonly passwordExcludeUsername?: boolean | cdktf.IResolvable;
  /**
  * Length in days a user will be warned before password expiry: 0 = no warning.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}
  */
  readonly passwordExpireWarnDays?: number;
  /**
  * Number of distinct passwords that must be created before they can be reused: 0 = none.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_history_count PolicyPasswordDefault#password_history_count}
  */
  readonly passwordHistoryCount?: number;
  /**
  * Notification channels to use to notify a user when their account has been locked.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}
  */
  readonly passwordLockoutNotificationChannels?: string[];
  /**
  * Length in days a password is valid before expiry: 0 = no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_max_age_days PolicyPasswordDefault#password_max_age_days}
  */
  readonly passwordMaxAgeDays?: number;
  /**
  * Number of unsuccessful login attempts allowed before lockout: 0 = no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}
  */
  readonly passwordMaxLockoutAttempts?: number;
  /**
  * Minimum time interval in minutes between password changes: 0 = no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}
  */
  readonly passwordMinAgeMinutes?: number;
  /**
  * Minimum password length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_min_length PolicyPasswordDefault#password_min_length}
  */
  readonly passwordMinLength?: number;
  /**
  * If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default = 1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}
  */
  readonly passwordMinLowercase?: number;
  /**
  * If a password must contain at least one number: 0 = no, 1 = yes. Default = 1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_min_number PolicyPasswordDefault#password_min_number}
  */
  readonly passwordMinNumber?: number;
  /**
  * If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_min_symbol PolicyPasswordDefault#password_min_symbol}
  */
  readonly passwordMinSymbol?: number;
  /**
  * If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default = 1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}
  */
  readonly passwordMinUppercase?: number;
  /**
  * If a user should be informed when their account is locked.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}
  */
  readonly passwordShowLockoutFailures?: boolean | cdktf.IResolvable;
  /**
  * Min length of the password recovery question answer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#question_min_length PolicyPasswordDefault#question_min_length}
  */
  readonly questionMinLength?: number;
  /**
  * Enable or disable security question password recovery: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#question_recovery PolicyPasswordDefault#question_recovery}
  */
  readonly questionRecovery?: string;
  /**
  * Lifetime in minutes of the recovery email token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#recovery_email_token PolicyPasswordDefault#recovery_email_token}
  */
  readonly recoveryEmailToken?: number;
  /**
  * When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#skip_unlock PolicyPasswordDefault#skip_unlock}
  */
  readonly skipUnlock?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable SMS password recovery: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html#sms_recovery PolicyPasswordDefault#sms_recovery}
  */
  readonly smsRecovery?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html okta_policy_password_default}
*/
export class PolicyPasswordDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_policy_password_default";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/policy_password_default.html okta_policy_password_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyPasswordDefaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PolicyPasswordDefaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_password_default',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._callRecovery = config.callRecovery;
    this._emailRecovery = config.emailRecovery;
    this._passwordAutoUnlockMinutes = config.passwordAutoUnlockMinutes;
    this._passwordDictionaryLookup = config.passwordDictionaryLookup;
    this._passwordExcludeFirstName = config.passwordExcludeFirstName;
    this._passwordExcludeLastName = config.passwordExcludeLastName;
    this._passwordExcludeUsername = config.passwordExcludeUsername;
    this._passwordExpireWarnDays = config.passwordExpireWarnDays;
    this._passwordHistoryCount = config.passwordHistoryCount;
    this._passwordLockoutNotificationChannels = config.passwordLockoutNotificationChannels;
    this._passwordMaxAgeDays = config.passwordMaxAgeDays;
    this._passwordMaxLockoutAttempts = config.passwordMaxLockoutAttempts;
    this._passwordMinAgeMinutes = config.passwordMinAgeMinutes;
    this._passwordMinLength = config.passwordMinLength;
    this._passwordMinLowercase = config.passwordMinLowercase;
    this._passwordMinNumber = config.passwordMinNumber;
    this._passwordMinSymbol = config.passwordMinSymbol;
    this._passwordMinUppercase = config.passwordMinUppercase;
    this._passwordShowLockoutFailures = config.passwordShowLockoutFailures;
    this._questionMinLength = config.questionMinLength;
    this._questionRecovery = config.questionRecovery;
    this._recoveryEmailToken = config.recoveryEmailToken;
    this._skipUnlock = config.skipUnlock;
    this._smsRecovery = config.smsRecovery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // call_recovery - computed: false, optional: true, required: false
  private _callRecovery?: string; 
  public get callRecovery() {
    return this.getStringAttribute('call_recovery');
  }
  public set callRecovery(value: string) {
    this._callRecovery = value;
  }
  public resetCallRecovery() {
    this._callRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callRecoveryInput() {
    return this._callRecovery;
  }

  // default_auth_provider - computed: true, optional: false, required: false
  public get defaultAuthProvider() {
    return this.getStringAttribute('default_auth_provider');
  }

  // default_included_group_id - computed: true, optional: false, required: false
  public get defaultIncludedGroupId() {
    return this.getStringAttribute('default_included_group_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_recovery - computed: false, optional: true, required: false
  private _emailRecovery?: string; 
  public get emailRecovery() {
    return this.getStringAttribute('email_recovery');
  }
  public set emailRecovery(value: string) {
    this._emailRecovery = value;
  }
  public resetEmailRecovery() {
    this._emailRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecoveryInput() {
    return this._emailRecovery;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password_auto_unlock_minutes - computed: false, optional: true, required: false
  private _passwordAutoUnlockMinutes?: number; 
  public get passwordAutoUnlockMinutes() {
    return this.getNumberAttribute('password_auto_unlock_minutes');
  }
  public set passwordAutoUnlockMinutes(value: number) {
    this._passwordAutoUnlockMinutes = value;
  }
  public resetPasswordAutoUnlockMinutes() {
    this._passwordAutoUnlockMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAutoUnlockMinutesInput() {
    return this._passwordAutoUnlockMinutes;
  }

  // password_dictionary_lookup - computed: false, optional: true, required: false
  private _passwordDictionaryLookup?: boolean | cdktf.IResolvable; 
  public get passwordDictionaryLookup() {
    return this.getBooleanAttribute('password_dictionary_lookup') as any;
  }
  public set passwordDictionaryLookup(value: boolean | cdktf.IResolvable) {
    this._passwordDictionaryLookup = value;
  }
  public resetPasswordDictionaryLookup() {
    this._passwordDictionaryLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordDictionaryLookupInput() {
    return this._passwordDictionaryLookup;
  }

  // password_exclude_first_name - computed: false, optional: true, required: false
  private _passwordExcludeFirstName?: boolean | cdktf.IResolvable; 
  public get passwordExcludeFirstName() {
    return this.getBooleanAttribute('password_exclude_first_name') as any;
  }
  public set passwordExcludeFirstName(value: boolean | cdktf.IResolvable) {
    this._passwordExcludeFirstName = value;
  }
  public resetPasswordExcludeFirstName() {
    this._passwordExcludeFirstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExcludeFirstNameInput() {
    return this._passwordExcludeFirstName;
  }

  // password_exclude_last_name - computed: false, optional: true, required: false
  private _passwordExcludeLastName?: boolean | cdktf.IResolvable; 
  public get passwordExcludeLastName() {
    return this.getBooleanAttribute('password_exclude_last_name') as any;
  }
  public set passwordExcludeLastName(value: boolean | cdktf.IResolvable) {
    this._passwordExcludeLastName = value;
  }
  public resetPasswordExcludeLastName() {
    this._passwordExcludeLastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExcludeLastNameInput() {
    return this._passwordExcludeLastName;
  }

  // password_exclude_username - computed: false, optional: true, required: false
  private _passwordExcludeUsername?: boolean | cdktf.IResolvable; 
  public get passwordExcludeUsername() {
    return this.getBooleanAttribute('password_exclude_username') as any;
  }
  public set passwordExcludeUsername(value: boolean | cdktf.IResolvable) {
    this._passwordExcludeUsername = value;
  }
  public resetPasswordExcludeUsername() {
    this._passwordExcludeUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExcludeUsernameInput() {
    return this._passwordExcludeUsername;
  }

  // password_expire_warn_days - computed: false, optional: true, required: false
  private _passwordExpireWarnDays?: number; 
  public get passwordExpireWarnDays() {
    return this.getNumberAttribute('password_expire_warn_days');
  }
  public set passwordExpireWarnDays(value: number) {
    this._passwordExpireWarnDays = value;
  }
  public resetPasswordExpireWarnDays() {
    this._passwordExpireWarnDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpireWarnDaysInput() {
    return this._passwordExpireWarnDays;
  }

  // password_history_count - computed: false, optional: true, required: false
  private _passwordHistoryCount?: number; 
  public get passwordHistoryCount() {
    return this.getNumberAttribute('password_history_count');
  }
  public set passwordHistoryCount(value: number) {
    this._passwordHistoryCount = value;
  }
  public resetPasswordHistoryCount() {
    this._passwordHistoryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryCountInput() {
    return this._passwordHistoryCount;
  }

  // password_lockout_notification_channels - computed: false, optional: true, required: false
  private _passwordLockoutNotificationChannels?: string[]; 
  public get passwordLockoutNotificationChannels() {
    return this.getListAttribute('password_lockout_notification_channels');
  }
  public set passwordLockoutNotificationChannels(value: string[]) {
    this._passwordLockoutNotificationChannels = value;
  }
  public resetPasswordLockoutNotificationChannels() {
    this._passwordLockoutNotificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLockoutNotificationChannelsInput() {
    return this._passwordLockoutNotificationChannels;
  }

  // password_max_age_days - computed: false, optional: true, required: false
  private _passwordMaxAgeDays?: number; 
  public get passwordMaxAgeDays() {
    return this.getNumberAttribute('password_max_age_days');
  }
  public set passwordMaxAgeDays(value: number) {
    this._passwordMaxAgeDays = value;
  }
  public resetPasswordMaxAgeDays() {
    this._passwordMaxAgeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMaxAgeDaysInput() {
    return this._passwordMaxAgeDays;
  }

  // password_max_lockout_attempts - computed: false, optional: true, required: false
  private _passwordMaxLockoutAttempts?: number; 
  public get passwordMaxLockoutAttempts() {
    return this.getNumberAttribute('password_max_lockout_attempts');
  }
  public set passwordMaxLockoutAttempts(value: number) {
    this._passwordMaxLockoutAttempts = value;
  }
  public resetPasswordMaxLockoutAttempts() {
    this._passwordMaxLockoutAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMaxLockoutAttemptsInput() {
    return this._passwordMaxLockoutAttempts;
  }

  // password_min_age_minutes - computed: false, optional: true, required: false
  private _passwordMinAgeMinutes?: number; 
  public get passwordMinAgeMinutes() {
    return this.getNumberAttribute('password_min_age_minutes');
  }
  public set passwordMinAgeMinutes(value: number) {
    this._passwordMinAgeMinutes = value;
  }
  public resetPasswordMinAgeMinutes() {
    this._passwordMinAgeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinAgeMinutesInput() {
    return this._passwordMinAgeMinutes;
  }

  // password_min_length - computed: false, optional: true, required: false
  private _passwordMinLength?: number; 
  public get passwordMinLength() {
    return this.getNumberAttribute('password_min_length');
  }
  public set passwordMinLength(value: number) {
    this._passwordMinLength = value;
  }
  public resetPasswordMinLength() {
    this._passwordMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinLengthInput() {
    return this._passwordMinLength;
  }

  // password_min_lowercase - computed: false, optional: true, required: false
  private _passwordMinLowercase?: number; 
  public get passwordMinLowercase() {
    return this.getNumberAttribute('password_min_lowercase');
  }
  public set passwordMinLowercase(value: number) {
    this._passwordMinLowercase = value;
  }
  public resetPasswordMinLowercase() {
    this._passwordMinLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinLowercaseInput() {
    return this._passwordMinLowercase;
  }

  // password_min_number - computed: false, optional: true, required: false
  private _passwordMinNumber?: number; 
  public get passwordMinNumber() {
    return this.getNumberAttribute('password_min_number');
  }
  public set passwordMinNumber(value: number) {
    this._passwordMinNumber = value;
  }
  public resetPasswordMinNumber() {
    this._passwordMinNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinNumberInput() {
    return this._passwordMinNumber;
  }

  // password_min_symbol - computed: false, optional: true, required: false
  private _passwordMinSymbol?: number; 
  public get passwordMinSymbol() {
    return this.getNumberAttribute('password_min_symbol');
  }
  public set passwordMinSymbol(value: number) {
    this._passwordMinSymbol = value;
  }
  public resetPasswordMinSymbol() {
    this._passwordMinSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinSymbolInput() {
    return this._passwordMinSymbol;
  }

  // password_min_uppercase - computed: false, optional: true, required: false
  private _passwordMinUppercase?: number; 
  public get passwordMinUppercase() {
    return this.getNumberAttribute('password_min_uppercase');
  }
  public set passwordMinUppercase(value: number) {
    this._passwordMinUppercase = value;
  }
  public resetPasswordMinUppercase() {
    this._passwordMinUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinUppercaseInput() {
    return this._passwordMinUppercase;
  }

  // password_show_lockout_failures - computed: false, optional: true, required: false
  private _passwordShowLockoutFailures?: boolean | cdktf.IResolvable; 
  public get passwordShowLockoutFailures() {
    return this.getBooleanAttribute('password_show_lockout_failures') as any;
  }
  public set passwordShowLockoutFailures(value: boolean | cdktf.IResolvable) {
    this._passwordShowLockoutFailures = value;
  }
  public resetPasswordShowLockoutFailures() {
    this._passwordShowLockoutFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordShowLockoutFailuresInput() {
    return this._passwordShowLockoutFailures;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // question_min_length - computed: false, optional: true, required: false
  private _questionMinLength?: number; 
  public get questionMinLength() {
    return this.getNumberAttribute('question_min_length');
  }
  public set questionMinLength(value: number) {
    this._questionMinLength = value;
  }
  public resetQuestionMinLength() {
    this._questionMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionMinLengthInput() {
    return this._questionMinLength;
  }

  // question_recovery - computed: false, optional: true, required: false
  private _questionRecovery?: string; 
  public get questionRecovery() {
    return this.getStringAttribute('question_recovery');
  }
  public set questionRecovery(value: string) {
    this._questionRecovery = value;
  }
  public resetQuestionRecovery() {
    this._questionRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionRecoveryInput() {
    return this._questionRecovery;
  }

  // recovery_email_token - computed: false, optional: true, required: false
  private _recoveryEmailToken?: number; 
  public get recoveryEmailToken() {
    return this.getNumberAttribute('recovery_email_token');
  }
  public set recoveryEmailToken(value: number) {
    this._recoveryEmailToken = value;
  }
  public resetRecoveryEmailToken() {
    this._recoveryEmailToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryEmailTokenInput() {
    return this._recoveryEmailToken;
  }

  // skip_unlock - computed: false, optional: true, required: false
  private _skipUnlock?: boolean | cdktf.IResolvable; 
  public get skipUnlock() {
    return this.getBooleanAttribute('skip_unlock') as any;
  }
  public set skipUnlock(value: boolean | cdktf.IResolvable) {
    this._skipUnlock = value;
  }
  public resetSkipUnlock() {
    this._skipUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnlockInput() {
    return this._skipUnlock;
  }

  // sms_recovery - computed: false, optional: true, required: false
  private _smsRecovery?: string; 
  public get smsRecovery() {
    return this.getStringAttribute('sms_recovery');
  }
  public set smsRecovery(value: string) {
    this._smsRecovery = value;
  }
  public resetSmsRecovery() {
    this._smsRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsRecoveryInput() {
    return this._smsRecovery;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      call_recovery: cdktf.stringToTerraform(this._callRecovery),
      email_recovery: cdktf.stringToTerraform(this._emailRecovery),
      password_auto_unlock_minutes: cdktf.numberToTerraform(this._passwordAutoUnlockMinutes),
      password_dictionary_lookup: cdktf.booleanToTerraform(this._passwordDictionaryLookup),
      password_exclude_first_name: cdktf.booleanToTerraform(this._passwordExcludeFirstName),
      password_exclude_last_name: cdktf.booleanToTerraform(this._passwordExcludeLastName),
      password_exclude_username: cdktf.booleanToTerraform(this._passwordExcludeUsername),
      password_expire_warn_days: cdktf.numberToTerraform(this._passwordExpireWarnDays),
      password_history_count: cdktf.numberToTerraform(this._passwordHistoryCount),
      password_lockout_notification_channels: cdktf.listMapper(cdktf.stringToTerraform)(this._passwordLockoutNotificationChannels),
      password_max_age_days: cdktf.numberToTerraform(this._passwordMaxAgeDays),
      password_max_lockout_attempts: cdktf.numberToTerraform(this._passwordMaxLockoutAttempts),
      password_min_age_minutes: cdktf.numberToTerraform(this._passwordMinAgeMinutes),
      password_min_length: cdktf.numberToTerraform(this._passwordMinLength),
      password_min_lowercase: cdktf.numberToTerraform(this._passwordMinLowercase),
      password_min_number: cdktf.numberToTerraform(this._passwordMinNumber),
      password_min_symbol: cdktf.numberToTerraform(this._passwordMinSymbol),
      password_min_uppercase: cdktf.numberToTerraform(this._passwordMinUppercase),
      password_show_lockout_failures: cdktf.booleanToTerraform(this._passwordShowLockoutFailures),
      question_min_length: cdktf.numberToTerraform(this._questionMinLength),
      question_recovery: cdktf.stringToTerraform(this._questionRecovery),
      recovery_email_token: cdktf.numberToTerraform(this._recoveryEmailToken),
      skip_unlock: cdktf.booleanToTerraform(this._skipUnlock),
      sms_recovery: cdktf.stringToTerraform(this._smsRecovery),
    };
  }
}
