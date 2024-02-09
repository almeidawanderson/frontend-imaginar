import { forwardRef } from 'react';
import { organizeData } from './ultils/organizeData';
import {
  Actions,
  ContainerActions,
  ContainerWrapper,
  Empty,
  Progress,
  TableBox,
  Wrapper,
} from './styles';
import { TableProps } from './type';
import { ReactComponent as Eye } from '../../../assets/icons/eye.svg';
import { ReactComponent as EmptyTableImg } from '../../../assets/images/no-users.svg';
import { useTheme } from 'styled-components';
import { situationColor } from './ultils/situa'



export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      id,
      data,
      headers,
      enableActions,
      emptyMessage,
      instruction,
      loading,
      otherColor,
      textColor,
      canEdit,
      canDownload,
      canChangeStatus,
      canResetPassword,
      canViewDetail,
      canStart,
      hideLineBottom,
      isPlannigGoal,
      onChangeStatus,
      onResetPassword,
      onEdit,
      onDetail,
      onDownload,
      onStart,
    },
    ref,
  ) => {
    const [organizedData, indexedHeader] = organizeData(data, headers);
    const { colors: theme } = useTheme();

    function isElaborated(row: any) {
      return !!row?.production_goal_elaborated;
    }

    function isProgrammed(row: any) {
      if (row?.production_goal_situation) {
        return row.production_goal_situation === 'Programado';
      }
      return false;
    }

    function canStartProduction(row: any) {
      if (row?.$original.production_goal_can_start) {
        return row.$original.production_goal_can_start;
      }

      return false;
    }

    function isDwgAvailable(row: any) {
      if (row?.$original?.pipe_model_path) {
        return true;
      }
      return false;
    }

    function isPositive(item: number) {
      if (item === 0) return '';
      return item > 0 ? theme.success.mediumDark : theme.danger.mediumDark;
    }

    return (
      <>
        {data?.length !== 0 && (
          <Wrapper>
            <ContainerWrapper>
              <TableBox ref={ref} id={id} hideLineBottom={hideLineBottom}>
                <thead>
                  <tr>
                    {headers?.map((header) => (
                      <th
                        key={header.key}
                        style={{
                          paddingLeft: headers.length === 1 ? '3rem' : '',
                          width: header.columnWidth ? header.columnWidth : '',
                          textAlign: header.leftHeader ? 'left' : 'center',
                          backgroundColor: otherColor,
                          color: textColor,
                        }}
                      >
                        {header.value}
                      </th>
                    ))}

                    {enableActions && (
                      <>
                        <th style={{ width: '25%' }}>{'Ações'}</th>
                      </>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {organizedData?.map((row: any, i: number) => {
                    return (
                      <tr key={i}>
                        {Object.keys(row).map((item, index) => {
                          if (item === '$original') {
                            return null;
                          }

                          return (
                            <td
                              className={
                                isElaborated(row) && item == 'production_goal_elaborated'
                                  ? 'tooltip'
                                  : ''
                              }
                              key={index}
                              style={{
                                paddingLeft: headers.length === 1 ? '3rem' : '',
                                width: indexedHeader[item].columnWidth || '',
                                textAlign: indexedHeader[item].leftBody ? 'left' : 'center',
                                color:
                                  item === 'accumulated_production'
                                    ? isPositive(row[item])
                                    : item === 'production_goal_situation' ||
                                      item === 'daily_production_situation'
                                    ? situationColor[row[item]]
                                    : '',
                              }}
                            >
                              {item === 'production_goal_elaborated'
                                ? row[item] || ''
                                : row[item] || '-'}

                              {isElaborated(row) && item == 'production_goal_elaborated' ? (
                                <p>Planejamento sem produções diárias distribuídas.</p>
                              ) : (
                                ''
                              )}
                            </td>
                          );
                        })}

                        {enableActions && (
                          <td>
                            <Actions
                              style={{
                                width: '100%',
                                justifyContent: 'space-between',
                                paddingRight: headers.length === 1 ? '1rem' : '',
                              }}
                            >
                              <ContainerActions>
                                {onDetail && (
                                  <button
                                    className="icon-button"
                                    onClick={() => onDetail && onDetail(row.$original)}
                                    title={'detalhes'}
                                    disabled={!canViewDetail}
                                  >
                                    <Eye />
                                  </button>
                                )}

                                {onDownload && (
                                  <button
                                    className="icon-button"
                                    onClick={() => onDownload && onDownload(row.$original)}
                                    title="download"
                                    // disabled={!canDownload}
                                    disabled={
                                      isDwgAvailable
                                        ? canDownload && !isDwgAvailable(row)
                                        : !canDownload
                                    }
                                  >
                                    {/* <FeatherDownload size="20px" /> */}
                                  </button>
                                )}

                                {onEdit && (
                                  <button
                                    className="icon-button"
                                    onClick={() => onEdit && onEdit(row.$original)}
                                    title={'editar'}
                                    disabled={
                                      isPlannigGoal ? canEdit && !isProgrammed(row) : !canEdit
                                    }
                                  >
                                    {/* <HiOutlinePencil size="20px" /> */}
                                  </button>
                                )}

                                {onResetPassword && (
                                  <button
                                    className="icon-button"
                                    onClick={() =>
                                      onResetPassword && onResetPassword(row.$original)
                                    }
                                    title={'resetar'}
                                    disabled={!canResetPassword}
                                  >
                                    {/* <FiRefreshCcw size="20px" /> */}
                                  </button>
                                )}

                                {onStart && (
                                  <button
                                    className="icon-button"
                                    onClick={() => onStart && onStart(row.$original)}
                                    title={'iniciar'}
                                    disabled={canStart && !canStartProduction(row)}
                                  >
                                    {/* <PlayIcon size="20px" /> */}
                                  </button>
                                )}
                              </ContainerActions>

                              {onChangeStatus && (
                                <button
                                  className={
                                    !!row.$original.status
                                      ? 'status-button'
                                      : 'status-button active-status'
                                  }
                                  onClick={() => {
                                    if (onChangeStatus) {
                                      onChangeStatus(row.$original);
                                    }
                                  }}
                                  disabled={!canChangeStatus}
                                >
                                  {!!row.$original.status ? 'Desativar' : 'Ativar'}
                                </button>
                              )}
                            </Actions>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </TableBox>

              {loading && (
                <Progress>
                  {/* <CircularProgressTable /> */}
                </Progress>
              )}
            </ContainerWrapper>
          </Wrapper>
        )}

        {data?.length === 0 && (
          <Wrapper>
            <TableBox ref={ref} id={id}>
              <thead>
                <tr></tr>
              </thead>
            </TableBox>
            <Empty>
              <EmptyTableImg />
              {/* <Header4 fontColor={theme.typography.mediumGray}>{emptyMessage}</Header4>
              <Body1 fontColor={theme.typography.gray}>{instruction}</Body1> */}
            </Empty>
          </Wrapper>
        )}
      </>
    );
  },
);
