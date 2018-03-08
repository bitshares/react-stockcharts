'use strict';

import React from "react";
import { helper } from "react-stockcharts";
import createReactClass from "create-react-class";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

var { TypeChooser } = helper;

import HorizontalStackedBarChart from "lib/charts/HorizontalStackedBarChart";

var HorizontalBarChartPage = createReactClass({
	statics: {
		title: "Horizontal Stacked Bar"
	},
	render() {
		return (
			<ContentSection title={HorizontalBarChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref="container">
							{(type) => (<HorizontalStackedBarChart data={this.props.horizontalGroupedBarData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{__html: require('md/HORIZONTAL-STACKED-BAR-CHART')}}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
});

export default HorizontalBarChartPage;
