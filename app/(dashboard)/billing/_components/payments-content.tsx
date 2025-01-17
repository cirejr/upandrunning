"use client";

import { getTransactions } from "@/utils/paddle/get-transactions";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { usePagination } from "@/hooks/use-pagination";
import { TransactionResponse } from "@/lib/api.types";
import { ErrorContent } from "../../_components/error-content";
import { LoadingScreen } from "../../_components/loading-screen";

interface Props {
  subscriptionId: string;
}

export function PaymentsContent({ subscriptionId }: Props) {
  const { after, goToNextPage, goToPrevPage, hasPrev } = usePagination();

  const [transactionResponse, setTransactionResponse] =
    useState<TransactionResponse>({
      data: [],
      hasMore: false,
      totalRecords: 0,
      error: undefined,
    });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getTransactions(subscriptionId, after);
      if (response) {
        setTransactionResponse(response);
      }
      setLoading(false);
    })();
  }, [subscriptionId, after]);

  if (!transactionResponse || transactionResponse.error) {
    return <ErrorContent />;
  } else if (loading) {
    return <LoadingScreen />;
  }

  const { data: transactionData, hasMore, totalRecords } = transactionResponse;
  return (
    <div>
      <DataTable
        columns={columns}
        hasMore={hasMore}
        totalRecords={totalRecords}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        hasPrev={hasPrev}
        data={transactionData ?? []}
      />
    </div>
  );
}
