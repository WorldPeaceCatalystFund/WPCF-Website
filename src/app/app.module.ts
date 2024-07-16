import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//import {NgxGoogleAnalyticsModule,NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FortuneTellersComponent } from './Components/Getting Started/fortune-tellers/fortune-tellers.component';
import { WorldPeaceMovementComponent } from './Components/Getting Started/world-peace-movement/world-peace-movement.component';
import { ReligiousCompanionComponent } from './Components/Getting Started/religious-companion/religious-companion.component';
import { PhilosophyComponent } from './Components/philosophy/philosophy.component';
import { ReadingMaterialsComponent } from './Components/reading-materials/reading-materials.component';
import { SymbolsComponent } from './Components/symbols/symbols.component';
import { ResearchComponent } from './Components/research/research.component';
import { MmiComponent } from './Components/mmi/mmi.component';
import { PrinciplesComponent } from './Components/principles/principles.component';
import { Wcc1Component } from './Components/wcc1/wcc1.component';
import { Wcc2Component } from './Components/wcc2/wcc2.component';
import { MydComponent } from './Components/myd/myd.component';
import { InstagramComponent } from './Components/instagram/instagram.component';
import { FacebookPageComponent } from './Components/facebook-page/facebook-page.component';
import { PodcastComponent } from './Components/podcast/podcast.component';
import { FacebookGroupComponent } from './Components/facebook-group/facebook-group.component';
import { YoutubeComponent } from './Components/youtube/youtube.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { VisionComponent } from './Components/vision/vision.component';
import { MtfComponent } from './Components/mtf/mtf.component';
import { PurposeComponent } from './Components/purpose/purpose.component';
import { PlansComponent } from './Components/plans/plans.component';
import { AppDesignComponent } from './Components/app-design/app-design.component';
import { DonateComponent } from './Components/donate/donate.component';
import { VolunteerComponent } from './Components/volunteer/volunteer.component';
import { SeenUsComponent } from './Components/seen-us/seen-us.component';
import { ProgramAfwpComponent } from './Components/program-afwp/program-afwp.component';
import { ProgramCccpComponent } from './Components/program-cccp/program-cccp.component';
import { InstagramMediaService } from './Services/instagram-media.service';
import { AlethiometerComponent } from './Components/Getting Started/alethiometer/alethiometer.component';
import { UnsubscribeComponent } from './Components/unsubscribe/unsubscribe.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { StatisticsComponent } from './Components/WP Arguments/statistics/statistics.component';
import { BarriersComponent } from './Components/WP Arguments/barriers/barriers.component';
import { ComparisonComponent } from './Components/WP Arguments/comparison/comparison.component';
import { Egypt1Component } from './Components/funnels/kickstarter/egypt1/egypt1.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SubscribeThankYouComponent } from './Components/thank you pages/subscribe-thank-you/subscribe-thank-you.component';
import { UnsubscribeThankYouComponent } from './Components/thank you pages/unsubscribe-thank-you/unsubscribe-thank-you/unsubscribe-thank-you.component';
import { ImpactComponent } from './Components/impact/impact.component';
import { PaymentThankyouComponent } from './Components/thank you pages/payment-thank-you/payment-thankyou/payment-thankyou.component';
import { FailedPaymentThankyouComponent } from './Components/thank you pages/failed-payment-thank-you/failed-payment-thankyou/failed-payment-thankyou.component';
import { AppDownloadFunnel1Component } from './Components/funnels/appDownload1/app-download-funnel1/app-download-funnel1.component';
import { AnonymityComponent } from './Components/WP Arguments/anonymity/anonymity.component';
import { ImageCommComponent } from './Components/WP Arguments/image_comm/image-comm/image-comm.component';
import { PoliticsComponent } from './Components/WP Arguments/politics/politics/politics.component';
import { PrivacyComponent } from './Components/privacy/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { DisclaimerComponent } from './Components/disclaimer/disclaimer/disclaimer.component';
import { OverviewComponent } from './Components/WP Arguments/overview/overview.component';
import { ConvowellComponent } from './Components/WP Arguments/convowell/convowell.component';
import { CaseRussiaUkraineComponent } from './Components/WP Arguments/case-russia-ukraine/case-russia-ukraine.component';
import { FinalComponent } from './Components/WP Arguments/final/final.component';
import { QuestioningComponent } from './Components/WP Arguments/questioning/questioning.component';

import { DonationFunnel2Component } from './Components/funnels/donationFunnels/donation-funnel2/donation-funnel2.component';
import { DonationFunnel3Component } from './Components/funnels/donationFunnels/donation-funnel3/donation-funnel3.component';
import { GoverningDocsComponent } from './Components/governing-docs/governing-docs.component';
import { FinancialDocsComponent } from './Components/financial-docs/financial-docs.component';
import { PlanComponent } from './Components/plan/plan.component';
import { AppDownloadFunnel2Component } from './Components/funnels/app-download-funnel2/app-download-funnel2.component';
import { GWAExp1Component } from './Components/experimentation/gwaexp1/gwaexp1.component';
import { Gwaexp1PublicComponent } from './Components/experimentation/gwaexp1-public/gwaexp1-public.component';
import { WhereverComponent } from './Components/memes/fightOppression/wherever/wherever.component';
import { FoOverviewComponent } from './Components/memes/fightOppression/fo-overview/fo-overview.component';
import { HardshipComponent } from './Components/memes/fightOppression/hardship/hardship.component';
import { PenComponent } from './Components/memes/fightOppression/pen/pen.component';
import { WantsComponent } from './Components/memes/fightOppression/wants/wants.component';
import { RunComponent } from './Components/memes/fightOppression/run/run.component';
import { Vsl2023Component } from './Components/funnels/givingTuesday/vsl2023/vsl2023.component';
import { Lsl2023Component } from './Components/funnels/givingTuesday/lsl2023/lsl2023.component';
import { BannerComponent } from './Components/banner/banner.component';
import { StripeSuccessComponent } from './Components/thank you pages/stripe-success/stripe-success.component';
import { StripeFailComponent } from './Components/thank you pages/stripe-fail/stripe-fail.component';
import { AD3Component } from './Components/funnels/appDownload1/a-d3/a-d3.component';
import { ContactComponent } from './Components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FortuneTellersComponent,
    WorldPeaceMovementComponent,
    ReligiousCompanionComponent,
    PhilosophyComponent,
    ReadingMaterialsComponent,
    SymbolsComponent,
    ResearchComponent,
    MmiComponent,
    PrinciplesComponent,
    Wcc1Component,
    Wcc2Component,
    MydComponent,
    InstagramComponent,
    FacebookPageComponent,
    PodcastComponent,
    FacebookGroupComponent,
    YoutubeComponent,
    AboutUsComponent,
    VisionComponent,
    MtfComponent,
    PurposeComponent,
    PlansComponent,
    AppDesignComponent,
    DonateComponent,
    VolunteerComponent,
    SeenUsComponent,
    ProgramAfwpComponent,
    ProgramCccpComponent,
    AlethiometerComponent,
    UnsubscribeComponent,
    HomeComponent,
    ErrorPageComponent,
    NavbarComponent,
    StatisticsComponent,
    BarriersComponent,
    ComparisonComponent,
    Egypt1Component,
    FooterComponent,
    SubscribeThankYouComponent,
    UnsubscribeThankYouComponent,
    ImpactComponent,
    PaymentThankyouComponent,
    FailedPaymentThankyouComponent,
    AppDownloadFunnel1Component,
    AnonymityComponent,
    ImageCommComponent,
    PoliticsComponent,
    PrivacyComponent,
    TermsComponent,
    DisclaimerComponent,
    OverviewComponent,
    ConvowellComponent,
    CaseRussiaUkraineComponent,
    FinalComponent,
    QuestioningComponent,
    
    DonationFunnel2Component,
    DonationFunnel3Component,
    GoverningDocsComponent,
    FinancialDocsComponent,
    PlanComponent,
    AppDownloadFunnel2Component,
    GWAExp1Component,
    Gwaexp1PublicComponent,
    WhereverComponent,
    FoOverviewComponent,
    HardshipComponent,
    PenComponent,
    WantsComponent,
    RunComponent,
    Vsl2023Component,
    Lsl2023Component,
    BannerComponent,
    StripeSuccessComponent,
    StripeFailComponent,
    AD3Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
   // NgxGoogleAnalyticsModule.forRoot('G-H875C370F9'),
    //NgxGoogleAnalyticsRouterModule
  ],
  providers: [InstagramMediaService,
    {provide:LocationStrategy,
    useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
