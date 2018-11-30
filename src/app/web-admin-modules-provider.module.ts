import {NgModule} from '@angular/core'
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleLoginModule } from 'web-console-login'
import { UIKITKitchenSinkModule } from 'wa-motif-open-api-kitchensink-module'

@NgModule({
    imports:[ WebConsoleCoreModule.withConfig({loginRoute:"login",dashboardRoute:"dashboard"}), WebConsoleLoginModule, UIKITKitchenSinkModule],
    exports:[ WebConsoleCoreModule, WebConsoleLoginModule ]
})
export class WebAdminModulesProvider {
    
}