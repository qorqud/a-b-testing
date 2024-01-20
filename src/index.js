import "./styles.css";
import {trackPageview, trackEvent} from "./analytics-api.js";
import {UserHelper} from "./helper/user-helper";
import {VariationService} from "./variation/variation-service";
import {VariationTemplateGeneratorFactory} from "./variation/template/variation-template-generator-factory";

UserHelper.initializeUser();

const articleId = 'fb2864fb-17ab-4aa6-a7a4-2dc4f4c21a8e'; // Mock article id
const variationService = new VariationService(articleId);

trackPageview(JSON.stringify({
    userId: UserHelper.getUserId(),
    articleId: articleId,
    variationId: variationService.getVariationIdForArticle()
}));

const variationTemplateGenerator = VariationTemplateGeneratorFactory.get(variationService.getVariationObject());
const variationContainer = document.getElementById('variation-container');
variationContainer.innerHTML = variationTemplateGenerator.getHtml();


const signUpButton = document.getElementById('signup');
signUpButton.addEventListener('click', () => {
    trackEvent(JSON.stringify({
        userId: UserHelper.getUserId(),
        articleId: articleId,
        variationId: variationService.getVariationIdForArticle(),
        eventName: 'sign-up-button-click'
    }));
});