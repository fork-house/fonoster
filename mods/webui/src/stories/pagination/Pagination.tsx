/*
 * Copyright (C) 2024 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState } from "react";
import { StyledPagination } from "./Pagination.styles";
import { PaginationProps } from "./types";
import { Typography } from "../typography/Typography";

export const Pagination = (props: PaginationProps) => {
  const [page, setPage] = useState(0);
  const { onClick, count, disabled, rowsPerPage } = props;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    onClick(event, newPage)
    setPage(newPage);
  };

  const renderDisplayedRows = ({ from, to, count }: { from: number; to: number; count: number }) => (
    <Typography variant="body-medium" >
      {`${from}-${to} of ${count}`}
    </Typography>
  );


  return <StyledPagination
    count={count}
    disabled={disabled}
    component="div"
    onPageChange={handleChangePage}
    page={page}
    rowsPerPage={rowsPerPage ? rowsPerPage : 10}
    rowsPerPageOptions={[]}
    labelRowsPerPage=''
    labelDisplayedRows={renderDisplayedRows}
    className={disabled ? "disabled" : ""}
  />;
};
