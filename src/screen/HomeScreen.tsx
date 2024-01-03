import { StyleSheet, Text, View } from "react-native";
import UploadButton from "../component/UploadButton";
import { COLOR } from "../constant/color";
import PretendardText from "../component/PretendardText";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <PretendardText fontStyle={styles.boldText}>오늘의 4컷</PretendardText>
                <PretendardText fontStyle={styles.contentText}>
                    오늘 하루를 표현할 수 있는
                    {`\n`}
                    사진 4장을 업로드 해주세요.
                </PretendardText>
            </View>
            <UploadButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    textContainer: {
        gap: 8,
    },
    boldText: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: COLOR.WFWHITE,
    },
    contentText: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        color: COLOR.WF500,
    }
});

export default HomeScreen;
