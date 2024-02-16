import { Pressable, StyleSheet } from "react-native";
import { COLOR } from "../constant/color";
import PretendardText from "./PretendardText";

function UploadButton() {
    return (
        <Pressable style={styles.button}>
            <PretendardText fontStyle={styles.text}>업로드 하기</PretendardText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLOR.MAIN01,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
    },
    text: {
        color: COLOR.WFWHITE,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Pretendard-Bold',
    },
});

export default UploadButton;
