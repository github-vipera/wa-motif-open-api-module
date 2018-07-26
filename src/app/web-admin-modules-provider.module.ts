import {NgModule} from '@angular/core'
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleLoginModule } from 'web-console-login'
import { WAMotifOpenApiModule } from 'wa-motif-open-api-module'
import { UIKITKitchenSinkModule } from 'wa-motif-open-api-kitchensink-module'

@NgModule({
    imports:[ WebConsoleCoreModule.withConfig({loginRoute:"login",dashboardRoute:"dashboard"}), WebConsoleLoginModule, WAMotifOpenApiModule, UIKITKitchenSinkModule],
    exports:[ WebConsoleCoreModule, WebConsoleLoginModule ]
})
export class WebAdminModulesProvider {
    
}