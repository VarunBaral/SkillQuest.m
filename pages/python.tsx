import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./python.module.css";
const Python: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://youtu.be/8DvywoWv6fI");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB"
    );
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://youtu.be/_uQrJ0TkZlc");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://youtu.be/rfscVS0vtbw");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLlrxD0HtieHhS8VzuMCfQD4uJ9yne1mE6"
    );
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    router.push("/sales");
  }, [router]);

  const onRectangleButton2Click = useCallback(() => {
    router.push("/sending-cold-emails");
  }, [router]);

  const onRectangleButton3Click = useCallback(() => {
    router.push("/prompt-engineer");
  }, [router]);

  const onRectangleButton4Click = useCallback(() => {
    router.push("/build-your-own-brand");
  }, [router]);

  const onRectangleButton5Click = useCallback(() => {
    router.push("/public-speaking");
  }, [router]);

  const onPublicSpeakingClick = useCallback(() => {
    router.push("/public-speaking");
  }, [router]);

  const onSalesClick = useCallback(() => {
    router.push("/sales");
  }, [router]);

  const onPromptEngineeringClick = useCallback(() => {
    router.push("/prompt-engineer");
  }, [router]);

  const onSendingColdEmailsClick = useCallback(() => {
    router.push("/sending-cold-emails");
  }, [router]);

  const onBuildingYourOwnClick = useCallback(() => {
    router.push("/build-your-own-brand");
  }, [router]);

  const onFrameButton5Click = useCallback(() => {
    router.push("/excel");
  }, [router]);

  const onFrameButton6Click = useCallback(() => {
    router.push("/web-development");
  }, [router]);

  const onFrameButton7Click = useCallback(() => {
    router.push("/python");
  }, [router]);

  const onFrameButton8Click = useCallback(() => {
    router.push("/people-management");
  }, [router]);

  const onFrameButton9Click = useCallback(() => {
    router.push("/uiux");
  }, [router]);

  return (
    <div className={styles.python}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <img
          className={styles.screenshot20230425At1047}
          alt=""
          src="/screenshot-20230425-at-1047-1@2x.png"
        />
        <b className={styles.about}>ABOUT</b>
        <button
          className={styles.frameInner}
          onClick={onRectangleButtonClick}
        />
        <button className={styles.accessCourses} onClick={onAccessCoursesClick}>
          Access Courses
        </button>
      </div>
      <div className={styles.pythonChild} />
      <div className={styles.pythonItem} />
      <div className={styles.pythonInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.pythonChild1} />
      <button className={styles.rectangleGroup} onClick={onFrameButtonClick}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton1Click}
      >
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.frameButton} onClick={onFrameButton2Click}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton3Click}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.rectangleParent2} onClick={onFrameButton4Click}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <img
        className={styles.screenshot20230427At1014}
        alt=""
        src="/screenshot-20230427-at-1014-1@2x.png"
      />
      <b className={styles.pythonForEverybodyContainer}>
        <p className={styles.pythonForEverybody}>
          Python For Everybody - Full University Python Course
        </p>
      </b>
      <div className={styles.byFreecodecamporg}>by freeCodeCamp.org</div>
      <div className={styles.byFreecodecamporg1}>by freeCodeCamp.org</div>
      <img
        className={styles.screenshot20230427At1013}
        alt=""
        src="/screenshot-20230427-at-1013@2x.png"
      />
      <b className={styles.pythonForBeginnersContainer}>
        <p className={styles.pythonForEverybody}>
          Python for Beginners - Full Course
        </p>
      </b>
      <div className={styles.byFreecodecamporg2}>
        <p className={styles.pythonForEverybody}>by freeCodeCamp.org</p>
      </div>
      <img
        className={styles.screenshot20230427At10131}
        alt=""
        src="/screenshot-20230427-at-10131@2x.png"
      />
      <b className={styles.pythonForBeginnersplaylist}>
        Python for Beginners[Playlist]
      </b>
      <div className={styles.byMicrosoftDeveloper}>by Microsoft Developer</div>
      <img
        className={styles.screenshot20230427At1012}
        alt=""
        src="/screenshot-20230427-at-1012@2x.png"
      />
      <b className={styles.learnPython}>
        Learn Python - Full Course for Beginners [Tutorial]
      </b>
      <img
        className={styles.screenshot20230427At10121}
        alt=""
        src="/screenshot-20230427-at-10121@2x.png"
      />
      <b className={styles.pythonTutorialContainer}>
        <p className={styles.pythonForEverybody}>
          Python Tutorial - Python Full Course for Beginners
        </p>
      </b>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.pythonForEverybody}>ALL CATEGORIES:</p>
            <p className={styles.pythonForEverybody}>&nbsp;</p>
          </div>
          <button
            className={styles.rectangleButton}
            onClick={onRectangleButton1Click}
          />
          <button
            className={styles.frameChild6}
            onClick={onRectangleButton2Click}
          />
          <button
            className={styles.frameChild7}
            onClick={onRectangleButton3Click}
          />
          <button
            className={styles.frameChild8}
            onClick={onRectangleButton4Click}
          />
          <button
            className={styles.frameChild9}
            onClick={onRectangleButton5Click}
          />
          <button
            className={styles.publicSpeaking}
            onClick={onPublicSpeakingClick}
          >
            <p className={styles.pythonForEverybody}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
            <p className={styles.pythonForEverybody}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.pythonForEverybody}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.pythonForEverybody}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.pythonForEverybody}>
              Building your Own Personal Brand
            </p>
          </button>
          <button
            className={styles.rectangleParent3}
            onClick={onFrameButton5Click}
          >
            <div className={styles.frameChild10} />
            <div className={styles.excel}>
              <p className={styles.pythonForEverybody}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild11} />
            <div className={styles.webDevelopment}>
              <p className={styles.pythonForEverybody}>Web Development</p>
            </div>
          </button>
          <div className={styles.frameChild12} />
          <button
            className={styles.pythonWrapper}
            onClick={onFrameButton7Click}
          >
            <div className={styles.python1}>Python</div>
          </button>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-11.svg"
          />
          <button
            className={styles.peopleManagementWrapper}
            onClick={onFrameButton8Click}
          >
            <div className={styles.peopleManagement}>
              <p className={styles.pythonForEverybody}>People Management</p>
            </div>
          </button>
          <button className={styles.vectorParent} onClick={onFrameButton9Click}>
            <img
              className={styles.frameChild13}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.uiux}>
              <p className={styles.pythonForEverybody}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Python;
