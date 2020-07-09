import {
    StyleSheet
} from 'react-native';


export default styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200
    },

    logofont: {
        textAlign: "center",
        color: "#2B337D",
        fontSize: 45,
        fontFamily: "All Star Resort"
    },

    TextInputSigIn: {
        width: 217,
        height: 41,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        color: "#2B337D"
    },

    bottomEntrar: {
        backgroundColor: "#2B337D",
        borderRadius: 100,
        width: 134,
        height: 42,
        justifyContent: "center"
    },

    bottomtextEntrar: {
        textAlign: "center",
        color: "white",
        fontSize: 20
    },

    manterconectado: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },

    textfooter: {
        color: "#2B337D",
        fontSize: 19
    },

    inner: {
        backgroundColor: "#DEE9F7",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#E2ECFD",
        borderWidth: 1
    },

    topShadow: {
        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF"
    },
    
    bottomShadow: {
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#B7C4DD"
    }

});
