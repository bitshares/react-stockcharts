"use strict";

import React from "react";
import { helper } from "react-stockcharts";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";
import createReactClass from "create-react-class";

import MovingAverageCrossOverAlgorithmV2 from "lib/charts/MovingAverageCrossOverAlgorithmV2";

var { TypeChooser } = helper;

var MovingAverageCrossoverAlgorithmPage2 = createReactClass({
	statics: {
		title: "MA Crossover - Using svg shape"
	},
	render() {
		return (
			<ContentSection title={MovingAverageCrossoverAlgorithmPage2.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref="container">
							{(type) => (<MovingAverageCrossOverAlgorithmV2  data={this.props.someData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{__html: require("md/MA-CROSSOVER-ALGORITHMV2")}}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
});

export default MovingAverageCrossoverAlgorithmPage2;
