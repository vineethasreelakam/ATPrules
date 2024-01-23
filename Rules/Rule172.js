import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule172({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT Q - Player Food Service</Text>{'\n\n'}
            
            <Text style={RuleStyles.SubHeading2}>Recommendations for Player Food Service Planning
            </Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>A.
            </Text>{'\n\n'}
            Player food should be prepared simply, with few sauces or spices. The following is a
            list of recommended food groups:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Carbohydrates 
            </Text>
            (60% of total calorie intake)
            {'\n\n'}a) Breads and Starches
            Assorted multi-grain breads and rolls, bagels, crackers, low-sugar cereals,
            pasta (with all sauces on the side), baked (white and sweet) potatoes (with
            selection of toppings) and rice (preferably brown or wild).
            {'\n\n'}b) Fruits and Vegetables
            Assorted fresh fruit salad, dried fruits, whole fresh fruits, and fresh cut raw
            vegetables. Salad bar: tomatoes, potatoes, lettuce (variety), cucumbers,
            sprouts, mushrooms, carrots, peas, beans, etc. with oil and vinegar-based
            dressings on the side.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Proteins 
            </Text>
            (15% of total calorie intake)
            {'\n\n'}Chicken (white meat), turkey (white meat), fish (assorted variety), soft low-fat
            cheeses, low fat cottage cheese, low fat yogurt, hard-boiled eggs, tofu, nonfat milk. Additional recommendations are soy milk and assorted nuts.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Miscellaneous
            </Text>
            
            {'\n\n'}a) Broth-based soups, (e.g., minestrone, chicken noodle, vegetable).
            {'\n\n'}b) All sauces should be served on the side (in a warmer if necessary).
            {'\n\n'}c) Low-fat cooking methods should be used (baked, broiled and roasted, with
            limited butter and oils).
            {'\n\n'}d) Seasonings should be light; offer extra salt, pepper, garlic, etc. on the side.
            
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>B.Daily Meal Planning
            </Text>{'\n\n'}
            
            {'\n\n'}1) When providing meals, a variety of food choices are preferred on a daily basis.
            {'\n\n'}2) In addition to daily meals, snacks should be provided throughout the day and evening (e.g., fruits, breads and rolls, cheeses, yogurts, nuts, crackers and raisins,
            etc.).
            {'\n\n'}3) If morning practices and matches are played, breakfast items should also be
            available (e.g., cold cereals, bagels and breads, yogurt, fruit).
            {'\n\n'}4) Suggested lunch and dinner menus should include Carbohydrates (bread/pasta/
            potatoes/rice) and at least two (2) protein selections (one [1] chicken and the
            other fish, meat, turkey or tofu).
            {'\n\n'}5) Practice hours and match schedule will determine when meals and/or snacks are
            served. Allow for during playing hours, and up until the last match has gone on
            court.
            {'\n\n'}6) Each tournament may contact the ATP Sport Medicine Department for menu recommendations and/or review.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule171', next: 'Rule173', nav: navigation }} />
    </>
  );
}

