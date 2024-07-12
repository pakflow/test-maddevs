import { useMemo, useState } from "react";
import { Report, ReportHeader } from "../../types/types";

type TableProps = {
  report: Report;
};

const Table: React.FC<TableProps> = ({ report }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  const getAlignment = (header: ReportHeader) => {
    if (header.align) {
      return header.align;
    }
    switch (header.type) {
      case 'string':
        return 'left';
      case 'float':
        return 'right';
      case 'boolean':
        return 'center';
      default:
        return 'left';
    }
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return report.data;

    const sorted = [...report.data];
    sorted.sort((a, b) => {
      const colIndex = report.header.findIndex(h => h.id === sortConfig.key);
      const aValue = typeof a[colIndex] === 'object' ? (a[colIndex] as { data: number }).data : a[colIndex];
      const bValue = typeof b[colIndex] === 'object' ? (b[colIndex] as { data: number }).data : b[colIndex];
      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [report.data, report.header, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          {report.header.map((col, index) => (
            <th
              key={index}
              onClick={() => requestSort(col.id)}
              style={{ textAlign: getAlignment(col) }}
            >
              {col.caption}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {report.header.map((col, colIndex) => (
              <td key={col.id} style={{ textAlign: getAlignment(col) }}>
                {typeof row[colIndex] === 'object' ? (row[colIndex] as { data: number }).data : row[colIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
