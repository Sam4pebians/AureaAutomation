import {BasePage} from '../base-page';
import {ConfigurationPageConstants} from './configuration-page.constants'   ;
import {By, element} from 'protractor';

export class ConfigurationPage extends BasePage {
    static get configurationDropDowns() {
        return {
            instanceSize: element(By.id(ConfigurationPageConstants.configurationDropDownsSelectors.instanceSizeId)),
            selectBlueprints: element(By.id(ConfigurationPageConstants.configurationDropDownsSelectors.selectBlueprintsId)),
            externalAddresses: element(By.id(ConfigurationPageConstants.configurationDropDownsSelectors.externalAddressesId))
        };
    }

    static get configurationRadioButton() {
        return {
            singleInstance: element(By.id(ConfigurationPageConstants.configurationRadioButtonSelectors.singleInstanceId)),
            stagingConfiguration: element.all(By.id(
                ConfigurationPageConstants.configurationRadioButtonSelectors.stagingConfigurationId)).first(),
            productionConfiguration: element.all(By.id(
                ConfigurationPageConstants.configurationRadioButtonSelectors.stagingConfigurationId)).get(1),
            customConfiguration: element(By.id(ConfigurationPageConstants.configurationRadioButtonSelectors.customConfigurationId))
        };
    }
}
