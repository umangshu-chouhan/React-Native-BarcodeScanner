import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

const Button = ({ children, onPress, fontSize, bgColor, disable, loading }) => {
  const { buttonStyle, textStyle, buttonDisableStyle } = styles
  var size = 16
  var backgoundColor = '#F40000'
  if (fontSize) {
    size = fontSize
  }

  if (bgColor) {
    backgoundColor = bgColor
  }

  return (
    <TouchableOpacity
      disabled={disable ? disable : false}
      style={[
        disable ? buttonDisableStyle : buttonStyle,
        {
          backgroundColor: backgoundColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }
      ]}
      onPress={onPress}
    >
      <Text style={[textStyle, { fontSize: size }]}>{children}</Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color="#ffffff"
          style={{ padding: 5 }}
        />
      ) : null}
    </TouchableOpacity>
  )
}

const styles = {
  iconText: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
    fontSize: 34,
    color: '#56544e',
    fontWeight: '500'
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 34,
    color: '#ffffff',
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#63ADEC',
    borderRadius: 2
  },
  buttonDisableStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 2,
    backgroundColor: '#4D8175',
    opacity: 0.7
  }
}

export default Button
