// import { t } from "i18next";

import { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";

const locales = {
  en: { title: "English" },
  ko: { title: "Korean" },
};
const [count, namekey] = [5, "탐지관리"];

function App() {
  const { t, i18n } = useTranslation();
  const gg = "main.header.asset.";
  console.log({ t, i18n });
  return (
    <div>
      {/* t(키값(string),  명시되는값 (optional)) */}
      <h1>1 : {t(gg + "me_1", "자산명")}</h1>
      <h1>2 : {t("me_1", "자산명ㅋㅋㅋ")}</h1>
      <h1>3 : {t("me_2", { count: 2, context: "asd", 1: "asdasd" })}</h1>
      <h1>4 : {<Trans i18nKey="me_3" components={{ br: <br /> }} />}</h1>
      <h1>
        5 :
        <Trans
          i18nKey="me_5" // key 값
          defaultsValue="삭제하시겠습니까 ㅋㅋㅋ?" // 동일 문자 명시하는것
          defaults="are you sure to delete ㅋㅋㅋ?" // 번역 -> 일치키 없을시 대체되는 문자
          components={{ 1: <p style={{ color: "red", fontWeight: 300 }} /> }}
        />
      </h1>
      <h1>
        6 :
        <Trans i18nKey="me_11" count={count} context="ggg">
          {/* components props에 들어갈 children 동일하게 적어줌 */}
          Hello <strong title={t("nameTitle")}>{{ namekey }}</strong>, you have {{ count }} unread message.
        </Trans>
      </h1>
      <h1>
        7 :
        <Trans i18nKey="me_4" defaultValue="테스트" defaults="테스트" />
      </h1>
      <h1>8 : {t("me_4", "새로운 키")}</h1>
      <h1>
        9:
        <Trans
          i18nKey="me_10"
          count={count}
          context="ㅁㄴㅁㄴ"
          value={10}
          components={{ span: <span style={{ color: "red" }} /> }}
        />
      </h1>
      <h1>
        10:
        <Trans i18nKey="me_11" context="ㅁㄴㅁㄴ" components={{ span: <span style={{ color: "red" }} /> }} />
      </h1>

      <ul>
        {Object.keys(locales).map((el) => {
          return (
            <li>
              <button onClick={() => i18n.changeLanguage(el)}>{locales[el].title}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const WrappedApp = () => {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
};

export default WrappedApp;
