export type HoldersState = {
  items: any[];
  total: number;
  page: number;
  rowsPerPage: number;
  handleChangePage?: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,) => void;
  handleChangeRowsPerPage?: (selectedRowsPerPage: number) => void;
}
