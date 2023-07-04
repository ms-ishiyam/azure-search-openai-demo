import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "BEVとは何ですか",
        value: "BEVとは何ですか"
    },
    { 
        text: "ハイブリッドインバーターについて教えてください", 
        value: "ハイブリッドインバーターについて教えてください" 
    },
    { 
        text: "従来のインバーターの課題はなんですか", 
        value: "従来のインバーターの課題はなんですか" 
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
