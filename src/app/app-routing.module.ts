import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AppDesignComponent } from './Components/app-design/app-design.component';
import { DisclaimerComponent } from './Components/disclaimer/disclaimer/disclaimer.component';
import { DonateComponent } from './Components/donate/donate.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { FacebookGroupComponent } from './Components/facebook-group/facebook-group.component';
import { FacebookPageComponent } from './Components/facebook-page/facebook-page.component';
import { FinancialDocsComponent } from './Components/financial-docs/financial-docs.component';
import { AppDownloadFunnel1Component } from './Components/funnels/appDownload1/app-download-funnel1/app-download-funnel1.component';
import { AppDownloadFunnel2Component } from './Components/funnels/app-download-funnel2/app-download-funnel2.component';
import { DonationFunnel2Component } from './Components/funnels/donationFunnels/donation-funnel2/donation-funnel2.component';
import { DonationFunnel3Component } from './Components/funnels/donationFunnels/donation-funnel3/donation-funnel3.component';
import { Egypt1Component } from './Components/funnels/kickstarter/egypt1/egypt1.component';
import { AlethiometerComponent } from './Components/Getting Started/alethiometer/alethiometer.component';
import { FortuneTellersComponent } from './Components/Getting Started/fortune-tellers/fortune-tellers.component';
import { ReligiousCompanionComponent } from './Components/Getting Started/religious-companion/religious-companion.component';
import { WorldPeaceMovementComponent } from './Components/Getting Started/world-peace-movement/world-peace-movement.component';
import { GoverningDocsComponent } from './Components/governing-docs/governing-docs.component';
import { HomeComponent } from './Components/home/home.component';
import { ImpactComponent } from './Components/impact/impact.component';
import { InstagramComponent } from './Components/instagram/instagram.component';
import { MmiComponent } from './Components/mmi/mmi.component';
import { MtfComponent } from './Components/mtf/mtf.component';
import { MydComponent } from './Components/myd/myd.component';
import { PhilosophyComponent } from './Components/philosophy/philosophy.component';
import { PlanComponent } from './Components/plan/plan.component';
import { PlansComponent } from './Components/plans/plans.component';
import { PodcastComponent } from './Components/podcast/podcast.component';
import { PrinciplesComponent } from './Components/principles/principles.component';
import { PrivacyComponent } from './Components/privacy/privacy/privacy.component';
import { ProgramAfwpComponent } from './Components/program-afwp/program-afwp.component';
import { ProgramCccpComponent } from './Components/program-cccp/program-cccp.component';
import { PurposeComponent } from './Components/purpose/purpose.component';
import { ReadingMaterialsComponent } from './Components/reading-materials/reading-materials.component';
import { ResearchComponent } from './Components/research/research.component';
import { SeenUsComponent } from './Components/seen-us/seen-us.component';
import { SymbolsComponent } from './Components/symbols/symbols.component';
import { TermsComponent } from './Components/terms/terms.component';
import { FailedPaymentThankyouComponent } from './Components/thank you pages/failed-payment-thank-you/failed-payment-thankyou/failed-payment-thankyou.component';
import { PaymentThankyouComponent } from './Components/thank you pages/payment-thank-you/payment-thankyou/payment-thankyou.component';
import { SubscribeThankYouComponent } from './Components/thank you pages/subscribe-thank-you/subscribe-thank-you.component';
import { UnsubscribeThankYouComponent } from './Components/thank you pages/unsubscribe-thank-you/unsubscribe-thank-you/unsubscribe-thank-you.component';
import { UnsubscribeComponent } from './Components/unsubscribe/unsubscribe.component';
import { VisionComponent } from './Components/vision/vision.component';
import { VolunteerComponent } from './Components/volunteer/volunteer.component';
import { Wcc1Component } from './Components/wcc1/wcc1.component';
import { Wcc2Component } from './Components/wcc2/wcc2.component';
import { AnonymityComponent } from './Components/WP Arguments/anonymity/anonymity.component';
import { BarriersComponent } from './Components/WP Arguments/barriers/barriers.component';
import { CaseRussiaUkraineComponent } from './Components/WP Arguments/case-russia-ukraine/case-russia-ukraine.component';
import { ComparisonComponent } from './Components/WP Arguments/comparison/comparison.component';
import { ConvowellComponent } from './Components/WP Arguments/convowell/convowell.component';
import { FinalComponent } from './Components/WP Arguments/final/final.component';
import { ImageCommComponent } from './Components/WP Arguments/image_comm/image-comm/image-comm.component';
import { OverviewComponent } from './Components/WP Arguments/overview/overview.component';
import { PoliticsComponent } from './Components/WP Arguments/politics/politics/politics.component';
import { QuestioningComponent } from './Components/WP Arguments/questioning/questioning.component';
import { StatisticsComponent } from './Components/WP Arguments/statistics/statistics.component';
import { YoutubeComponent } from './Components/youtube/youtube.component';
import { GWAExp1Component } from './Components/experimentation/gwaexp1/gwaexp1.component';
import { Gwaexp1PublicComponent } from './Components/experimentation/gwaexp1-public/gwaexp1-public.component';
import { WhereverComponent } from './Components/memes/fightOppression/wherever/wherever.component';
import { FoOverviewComponent } from './Components/memes/fightOppression/fo-overview/fo-overview.component';
import { HardshipComponent } from './Components/memes/fightOppression/hardship/hardship.component';
import { PenComponent } from './Components/memes/fightOppression/pen/pen.component';
import { RunComponent } from './Components/memes/fightOppression/run/run.component';
import { WantsComponent } from './Components/memes/fightOppression/wants/wants.component';
import { Lsl2023Component } from './Components/funnels/givingTuesday/lsl2023/lsl2023.component';
import { StripeSuccessComponent } from './Components/thank you pages/stripe-success/stripe-success.component';
import { StripeFailComponent } from './Components/thank you pages/stripe-fail/stripe-fail.component';
import { AD3Component } from './Components/funnels/appDownload1/a-d3/a-d3.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  { path: 'fortunetellers', component: FortuneTellersComponent },
  { path: 'religiouscompanion', component: ReligiousCompanionComponent },
  { path: 'worldpeace', component: WorldPeaceMovementComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  { path: 'readingmaterials', component: ReadingMaterialsComponent },
  { path: 'principles', component: PrinciplesComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'appdesign', component: AppDesignComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'facebookgroup', component: FacebookGroupComponent },
  { path: 'facebookpage', component: FacebookPageComponent },
  { path: 'instagram', component: InstagramComponent },
  { path: 'mmi', component: MmiComponent },
  { path: 'mtf', component: MtfComponent },
  { path: 'myd', component: MydComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'program-afwp', component: ProgramAfwpComponent },
  { path: 'program-cccp', component: ProgramCccpComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'seenus', component: SeenUsComponent },
  { path: 'symbols', component: SymbolsComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'wcc1', component: Wcc1Component },
  { path: 'wcc2', component: Wcc2Component },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: 'alethiometer', component: AlethiometerComponent },
  { path: 'purpose', component: PurposeComponent },
  {path:'home', component:HomeComponent},
  {path:'barriers', component:BarriersComponent},
  {path:'comparison', component:ComparisonComponent},
  {path:'statistics', component:StatisticsComponent},
   {path:'egypt1', component:Egypt1Component},
   {path:'subscribeThankyou', component:SubscribeThankYouComponent},
   {path:'unsubscribeThankyou', component:UnsubscribeThankYouComponent},
   {path:'paymentThankyou', component:PaymentThankyouComponent},
   {path:'failedPaymentThankyou', component:FailedPaymentThankyouComponent},
   {path:'impact', component:ImpactComponent},
   {path:'appDownloadFunnel1', component:AppDownloadFunnel1Component},
   {path:'appDownloadFunnel2', component: AppDownloadFunnel2Component},
   {path:'anonymity', component:AnonymityComponent},
   {path:'politicks', component:PoliticsComponent},
   {path:'imagecomm', component:ImageCommComponent},
   {path:'privacy', component:PrivacyComponent},
   {path:'terms', component:TermsComponent},
   {path:'disclaimer', component:DisclaimerComponent},
   {path:'overview', component: OverviewComponent},
   {path:'anonymity', component:AnonymityComponent},
   {path:'aD3', component: AD3Component},
   {path:'contact', component:ContactComponent},
   
   {path:'questioning', component:QuestioningComponent},
   {path:'convowell', component:ConvowellComponent},
   {path:'caseRussiaUkraine', component:CaseRussiaUkraineComponent},
   {path:'final', component:FinalComponent},
   {path:'donationFunnel2', component:DonationFunnel2Component},
   {path:'donationFunnel3', component:DonationFunnel3Component},
   {path:'governingDocs', component:GoverningDocsComponent},
   {path:'financialDocs', component:FinancialDocsComponent},
   {path:'strategicPlan', component:PlanComponent},
   {path:'GWAExp1', component:GWAExp1Component},
   {path:'GWAExp1P', component:Gwaexp1PublicComponent},
   {path:'wherever', component:WhereverComponent},
   {path:'FOoverview', component:FoOverviewComponent},
   {path:'hardship', component:HardshipComponent},
    {path:'pen', component:PenComponent},
    {path:'run', component:RunComponent},
    {path:'wants', component:WantsComponent},
    {path:'gtlsl2023', component:Lsl2023Component},
    {path:'stripe-success',component:StripeSuccessComponent},
    {path:'stripe-cancel',component:StripeFailComponent},




  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
