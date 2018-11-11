import {StepLogger} from '../../../../core/logger/step-logger';
import {PageHelper} from '../../../components/html/page-helper';
import {ConfigurationPage} from './configuration.po';
import {ValidationsHelper} from '../../../components/misc-utils/validation-helper';
import {ConfigurationPageConstants} from './configuration-page.constants';
import {CommonPageConstants} from '../common/common-page.constants';
import {CommonPageHelper} from '../common/common-page.helper';
import {CommonPage} from '../common/common.po';

export class ConfigurationPageHelper {

    static getEnvironmentLinkUsingName(environmentName: string) {
        return CommonPage.getAnchorByText(environmentName);
    }

    static async verifyConfigurationPage(environmentName: string, stepLogger: StepLogger) {
        stepLogger.step('"Configuration Page" for newly created environment displayed');
        await expect(await PageHelper.isElementDisplayed(CommonPageHelper.pageHeaders.configuration)).toBe(
            true, ValidationsHelper.getDisplayedValidation(CommonPageConstants.pageHeaders.configuration));

        stepLogger.verification('A bread crumb link with selected Environment name [Ex: SaiStgEnv] is ' +
            'displayed on right side of "Application" link on top of this page');
        await expect(await PageHelper.isElementDisplayed(ConfigurationPageHelper.getEnvironmentLinkUsingName(environmentName))).toBe(
            true, ValidationsHelper.getDisplayedValidation(environmentName));

        stepLogger.step('click on hide button');
        if (await PageHelper.isElementPresent(CommonPageHelper.buttons.hide)) {
            await PageHelper.click(CommonPageHelper.buttons.hide);
        }
    }

    static async verifyRadioButtonsOnConfigurationPage(stepLogger: StepLogger) {
        stepLogger.verification('Single Instance radio button should be displayed');
        await expect(await PageHelper.isElementDisplayed(ConfigurationPage.configurationRadioButton.singleInstance)).toBe(
            true, ValidationsHelper.getDisplayedValidation(
                ConfigurationPageConstants.configurationRadioButtonSelectors.singleInstanceId));

        stepLogger.verification('Staging Configuration radio button should be displayed');
        await expect(await PageHelper.isElementDisplayed(ConfigurationPage.configurationRadioButton.stagingConfiguration)).toBe(
            true, ValidationsHelper.getDisplayedValidation(
                ConfigurationPageConstants.configurationRadioButtonSelectors.stagingConfigurationId));

        stepLogger.verification('Production Configuration radio button should be displayed');
        await expect(await PageHelper.isElementDisplayed(ConfigurationPage.configurationRadioButton.productionConfiguration)).toBe(
            true, ValidationsHelper.getDisplayedValidation(
                ConfigurationPageConstants.configurationRadioButtonSelectors.stagingConfigurationId));

        stepLogger.verification('Custom Configuration radio button should be displayed');
        await expect(await PageHelper.isElementDisplayed(ConfigurationPage.configurationRadioButton.customConfiguration)).toBe(
            true, ValidationsHelper.getDisplayedValidation(
                ConfigurationPageConstants.configurationRadioButtonSelectors.customConfigurationId));
    }
}
