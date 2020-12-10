import { Component } from "react";

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return(
            `I am on slide ${this.state.currentSlideIndex}`
        )
    }
}