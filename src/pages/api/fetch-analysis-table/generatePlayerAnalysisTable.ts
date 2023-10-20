import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { statsLabelList } from '@/app/analysis/statsList';
import { PlayerStats } from '@/app/players/[player_id]/PlayerStats';
import { usePlayerStatsList } from '@/app/players/[player_id]/usePlayerStatsList';

export type GeneratePlayerAnalysisTableArgs = {
  targetPlayers: SeasonPlayer[];
  selectedStats: string[];
};

type Cell = {
  id: string;
  value: string;
};

type Row = Cell[];

export type PlayerAnalysisTable = {
  headRow: Row;
  bodyRows: Row[];
};

/**
 * 分析対象の選手を取得し、さらに選択されているスタッツと掛け合わせて分析テーブルを生成する
 */
export const generatePlayerAnalysisTable = async ({
  targetPlayers,
  selectedStats,
}: GeneratePlayerAnalysisTableArgs): Promise<PlayerAnalysisTable> => {
  const targetPlayerStatsList = await getTargetPlayerStatsList(targetPlayers);

  const headRow = generateAnalysisTableHeadRow(selectedStats);
  const bodyRows = generateAnalysisTableBodyRows(targetPlayerStatsList, selectedStats);

  return {
    headRow,
    bodyRows,
  };
};

const generateAnalysisTableHeadRow = (selectedStats: string[]) => {
  const headRow: Row = [
    {
      id: 'playerName',
      value: '選手名',
    },
  ];

  selectedStats.forEach((item) => {
    const label = statsLabelList.find((statsLabel) => statsLabel.value === item);
    if (!label) throw new Error('スタッツラベルが存在しません。');

    headRow.push({
      id: item,
      value: label.label,
    });
  });
  return headRow;
};

const generateAnalysisTableBodyRows = (
  targetPlayerStatsList: PlayerStats[],
  selectedStats: string[],
): Row[] => {
  const bodyRows: Row[] = [];

  Promise.all(
    targetPlayerStatsList.map(async (player) => {
      const cell: Row = [];
      // 選手名とイメージは必須
      const playerName = player.known_as;
      cell.push({
        id: 'playerName',
        value: playerName,
      });

      selectedStats.forEach((item) => {
        cell.push({
          id: item,
          // @ts-ignore
          value: player.detailed[item],
        });
      });

      bodyRows.push(cell);
    }),
  );

  return bodyRows;
};

const getTargetPlayerStatsList = async (targetPlayers: SeasonPlayer[]) => {
  return Promise.all(
    targetPlayers.map(async (player) => {
      const targetPlayerStatsList = await usePlayerStatsList(player.id);
      const targetPlayerStats = targetPlayerStatsList.find(
        (playerStats) => playerStats.competition_id === player.competition_id,
      );
      if (!targetPlayerStats) throw new Error('分析対象となる選手のスタッツが存在しません。');

      return targetPlayerStats;
    }),
  );
};
