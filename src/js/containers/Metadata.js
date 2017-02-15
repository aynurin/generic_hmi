import { connect } from 'react-redux'
import MediaPlayerBody from '../MediaPlayerBody'
import NonMediaBody from '../Templates/NonMedia/NonMediaBody'

const mapStateToProps = (state) => {
    var activeApp = state.activeApp
    var metadata = state.ui[activeApp]
    if (metadata === undefined) return {}
    var props = {
        mainField1: null,
        mainField2: null,
        mainField3: null
    }
    metadata.showStrings.map ((textField) => {
        switch (textField.fieldName) {
            case "mainField1":
                props.mainField1 = textField.fieldText
                break
            case "mainField2":
                props.mainField2 = textField.fieldText
                break
            case "mainField3":
                props.mainField3 = textField.fieldText
                break
        }
    })
    props.graphic = metadata.graphic ? metadata.graphic.value : null
    return props
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const MediaMetadata = connect(
    mapStateToProps,
    mapDispatchToProps
)(MediaPlayerBody)

export const NonMediaMetadata = connect(
    mapStateToProps,
    mapDispatchToProps
)(NonMediaBody)

export default MediaMetadata