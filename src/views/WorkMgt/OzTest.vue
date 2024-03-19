<template>
  <div id="wrap">
    <div class="container">
      <button class="btn" @click="handleOzReportClick">리포트 호출</button>
    </div>
    <form ref="frmReport">
      <input type="hidden" name="reportname" />
      <input type="hidden" name="jsonData" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const frmReport = ref(null);

const handleOzReportClick = () => {
  const jsonData = {
    reportname: 'tcsOfcProc',
    connection: {
      prgCode: '2210',
      icCode: '016',
      strtDt: '20190101',
      endDt: '20210205',
    },
    odi: [
      {
        odiName: 'tcsOfcProc',
        icCode: '016',
        strtDt: '20190101',
        endDt: '20210205',
        workNo: ['0202', '0202'],
        handSno: ['16', '31'],
      },
    ],
  };

  window.open(
    '',
    'frmReport',
    'toolbar=no,width=1161,height=904,directories=no,status=no,scrollbars=no,resizable=no',
  );
  frmReport.value.action = 'http://172.20.30.24:8094/oz80/server';
  frmReport.value.method = 'POST';
  frmReport.value.jsonData.value = JSON.stringify(jsonData);
  frmReport.value.target = 'frmReport';
  frmReport.value.submit();
};
</script>
