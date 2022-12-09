import React, { Component } from "react";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";

export default class ComboBoxDoc extends Component {
  constructor() {
    super(...arguments);
    //define the data with category
    this.list = [
      { Vegetable: "Cabbage", Category: "Leafy and Salad", Id: "item1" },
      { Vegetable: "Chickpea", Category: "Beans", Id: "item2" },
      { Vegetable: "Yarrow", Category: "Leafy and Salad", Id: "item11" }
    ];
    this.fields1 = { text: "Vegetable", value: "Id" };
    // map the groupBy field with Category column
    this.fields2 = { text: "Vegetable", value: "Id", groupBy: "Category" };
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">ComboBox</div>
          <div className="flex-1 px-2">
            <ComboBoxComponent
              cssClass="malt-combobox"
              dataSource={this.list}
              fields={this.fields1}
              placeholder="Select"
            />
          </div>
          <div className="flex-1 px-2">
            <ComboBoxComponent
              cssClass="malt-combobox"
              dataSource={this.list}
              fields={this.fields2}
              placeholder="Select"
            />
          </div>
          <div className="flex-1 px-2">
            <ComboBoxComponent
              cssClass="malt-combobox"
              dataSource={this.list}
              placeholder="Select"
              enabled={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
