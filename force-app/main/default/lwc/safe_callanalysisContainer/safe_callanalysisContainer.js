import { LightningElement, api } from 'lwc';

export default class Safe_callanalysisContainer extends LightningElement {
    //chat bubble Section Design Parameters
    @api firstChatBubble;
    @api secondChatBubble;
    @api thirdChatBubble;
    @api fourthChatBubble;
    @api fifthChatBubble;

    //section labels
    @api labelSentimentSection;
    @api labelComplianceSection;
    
    //compliance Section Design Parameters
    @api iconName1;
    @api iconName2;
    @api iconName3;
    @api iconName4;
    @api iconName1Label;
    @api iconName2Label;
    @api iconName3Label;
    @api iconName4Label;

    //keywords/tags for call analysis
    @api callTagLabel1;
    @api callTagLabel2;
    @api callTagLabel3;

    //Sentiment Values
    @api positivePercentage;
    @api neutralPercentage;
    @api negativePercentage;
}