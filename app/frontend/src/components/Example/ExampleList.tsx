import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "ハイブリッド電車とはなんですか",
        value: "水素ハイブリッド電車とはなんですか"
    },
    { 
        text: "水素供給システムについて教えてください", 
        value: "水素供給システムについて教えてください" 
    },
    { 
        text: "車両の運行ルート最適化について説明してください", 
        value: "車両の運行ルート最適化について説明してください" 
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
