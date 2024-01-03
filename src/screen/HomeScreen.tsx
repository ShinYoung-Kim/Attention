import { Text, View } from "react-native";
import UploadButton from "../component/UploadButton";

function HomeScreen() {
    return (
        <View>
            <Text>오늘의 4컷</Text>
            <Text>오늘 하루를 표현할 수 있는 사진 4장을 업로드해주세요</Text>
            <UploadButton />
        </View>
    );
}

export default HomeScreen;
