
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/login';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Line from './components/line/line';
import LineBoy from './components/line_boy/lineBoy';
import LineCreate from './components/lineCreate/lineCreate';
import Loan from './components/loan/loan';
import DateClose from './components/dateclose/dateclose';
import Collection from './components/collection/collection';
import Report from './components/reports/reports';
import ContinuouslyNotPaid from './components/reports/continuously_not_paid/ContinuouslyNotPaid';
import ExcessAmount from './components/reports/excess_amount/excessAmount';
import PastDateBill from './components/reports/past_date_bill/PastDateBill';
import NipParty from './components/reports/nip_party/nipparty';
import BillNotPaid from './components/reports/bill_not_paid/billNotPaid';
import MonthlyBill from './components/reports/monthly_bill/monthlyBill';
import MonthlyLoan from './components/reports/monthly_loan/monthlyLoan';
import BulkPaid from './components/reports/bulk_paid/bulkPaid';
import ClosedParty from './components/reports/closed_party/closedParty';
import AddLoan from './components/reports/closed_party/addLoan';
import UserList from './components/reports/user_past_loan_list/user_list/userList';
import ViewPastLoan from './components/reports/user_past_loan_list/view_page/viewPastLoan';
import IndividualView from './components/reports/individual_report/individual_view/individualView';
import LoanList from './components/reports/individual_report/loan_list/loanList';
import OrderNumber from './components/reports/order_number/orderNumber';
import TotalLedger from './components/reports/total_ledger/totalLedger';
import LedgerView from './components/reports/ledger_view/ledgerView';
import LineBoyLogin from './components/login/lineBoyLogin';
import LineBoyHome from './components/lineboypages/lineBoyHome';
import LineBoyPages from './components/lineboypages/lineBoyPage';
import TodayList from './components/collection/todayList/todayList';
import LineBoyNavbar from './components/lineboypages/lineboynavbar';
import DirectEntryCollection from './components/collection/DirectEntryCollection';
import TodayListCollection from './components/collection/TodayListCollection';
import LedgerEntryCollection from './components/collection/LedgerEntryCollection';
import Account from './components/thitam/account/account';
import TrialSheet from './components/thitam/trailSheet/trialSheet';
import OutstandingBalance from './components/thitam/outstandingBalance/outstandingBalance';
import AddHead from './components/thitam/addHead/addHead'
import BalanceSheet from './components/thitam/balanceSheet/balanceSheet';

import ThitamNav from './components/thitam/thitamNav';
import IndividualHead from './components/thitam/individualHead/individualHead';
import UpdateLoan from './components/loan/UpdateLoan';
import UpdateLineBoy from './components/line_boy/UpdateLineBoy';
import Thitam from './components/thitam/thitam/thitam';
import DirectEntry from './components/collection/directEntry/directEntry';
import ProtectedRoutes from './components/protectedRoutes/protectedRoutes';
import DirectEntryLB from './components/lineboypages/directEntry/directEntryLB';
import TodayListLB from './components/lineboypages/todayList/todayListLB';
import OpeningBalance from './components/thitam/openingBalance/OpeningBalance';
import UpdateAdmin from './components/admin/updateAdmin';
import Admin from './components/admin/admin';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {/* line boy login  */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboyhome" element={
              <div>
                <LineBoyNavbar />
                <LineBoyHome />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboypages" element={
              <div>
                <LineBoyNavbar />
                <LineBoyPages />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={
              <div>
                <LoginPage />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboylogin" element={
              <div>
                <LineBoyLogin />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={
              <div>
                <Navbar />
                <Home />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
<<<<<<< Updated upstream
            <Route path="/line" element={
              <div>
                <Navbar />
                <Line />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={
=======
          <Route path="/line" element={
            <div>
              <Navbar />
              <Line />
            </div>
          } />
          </Route>
          
          <Route path="/admin" element={
>>>>>>> Stashed changes
              <div>
                <Admin />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/updateadmin" element={
              <div>
                <Navbar />
                <UpdateAdmin />
              </div>
            } />
<<<<<<< Updated upstream
          </Route>
=======
          <Route path="/lineboy" element={
            <div>
              <LineBoy />
            </div>
          } />
          <Route path="/linecreate" element={
            <div>
              <Navbar />
              <LineCreate />
            </div>
          } />
          <Route path="/loan" element={
            <div>
              <Navbar />
              <Loan />
            </div>
          } />
          <Route path="/updateloan" element={
            <div>
              <Navbar />
              <UpdateLoan />
            </div>
          } />
          <Route path="/lineboyloan" element={
            <div>
              <LineBoyNavbar />
              <Loan />
            </div>
          } />
          <Route path="/lineboyupdate" element={
            <div>
              <Navbar />
              <UpdateLineBoy />
            </div>
          } />
          
          <Route element={<ProtectedRoutes />}>
          <Route path="/dateclose" element={
            <div>
              <Navbar />
              <DateClose />
            </div>
          } />
          </Route>
          <Route path="/lineboydateclose" element={
            <div>
              <LineBoyNavbar />
              <DateClose />
            </div>
          } />
          <Route path="/collection" element={
            <div>
              <Navbar />
              <Collection />
            </div>
          } />
          <Route path="/collection/direct" element={
            <div>
              <Navbar />
              <DirectEntryCollection />
            </div>
          } />
          <Route path="/collection/ledger" element={
            <div>
              <Navbar />
              <LedgerEntryCollection />
            </div>
          } />
          <Route path="/collection/today" element={
            <div>
              <Navbar />
              <TodayListCollection />
            </div>
          } />
          <Route path="/totalview" element={
            <div>
              <Navbar />
              <Report />
            </div>
          } />
>>>>>>> Stashed changes

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboy" element={
              <div>
                <LineBoy />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/linecreate" element={
              <div>
                <Navbar />
                <LineCreate />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/loan" element={
              <div>
                <Navbar />
                <Loan />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/updateloan" element={
              <div>
                <Navbar />
                <UpdateLoan />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboyloan" element={
              <div>
                <LineBoyNavbar />
                <Loan />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboyupdate" element={
              <div>
                <Navbar />
                <UpdateLineBoy />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/dateclose" element={
              <div>
                <Navbar />
                <DateClose />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboydateclose" element={
              <div>
                <LineBoyNavbar />
                <DateClose />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/collection" element={
              <div>
                <Navbar />
                <Collection />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/collection/direct" element={
              <div>
                <Navbar />
                <DirectEntryCollection />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/collection/ledger" element={
              <div>
                <Navbar />
                <LedgerEntryCollection />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/collection/today" element={
              <div>
                <Navbar />
                <TodayListCollection />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/totalview" element={
              <div>
                <Navbar />
                <Report />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/pastdatebill" element={
              <div>
                <Navbar />
                <PastDateBill />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/individualreport" element={
              <div>
                <Navbar />
                <LoanList />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboyindividualreport" element={
              <div>
                <LineBoyNavbar />
                <LoanList />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/totalledger" element={
              <div>
                <Navbar />
                <TotalLedger />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/monthlybill" element={
              <div>
                <Navbar />
                <Report />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/pastdatebill" element={
              <div>
                <Navbar />
                <Report />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/bulkpaidamount" element={
              <div>
                <Navbar />
                <BulkPaid />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/monthlyloan" element={
              <div>
                <Navbar />
                <Report />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/billnotpaid" element={
              <div>
                <Navbar />
                <BillNotPaid />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/userpastloanlist" element={
              <div>
                <Navbar />
                <UserList />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/nipparty" element={
              <div>
                <Navbar />
                <NipParty />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/excessamountpaid" element={
              <div>
                <Navbar />
                <ExcessAmount />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/ledgerview" element={
              <div>
                <Navbar />
                <LedgerView />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/bulkpaid" element={
              <div>
                <Navbar />
                <Report />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/continuouslynotpaid" element={
              <div>
                <Navbar />
                <ContinuouslyNotPaid />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/ordernumber" element={
              <div>
                <Navbar />
                <OrderNumber />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboyordernumber" element={
              <div>
                <LineBoyNavbar />
                <OrderNumber />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/report" element={
              <div>
                <Navbar />
                <Report />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/monthlybillpaid" element={
              <div>
                <Navbar />
                <MonthlyBill />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/monthlyloanamount" element={
              <div>
                <Navbar />
                <MonthlyLoan />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/closedparty" element={
              <div>
                <Navbar />
                <ClosedParty />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/addloan" element={
              <div>
                <Navbar />
                <AddLoan />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/lineboyclosedparty" element={
              <div>
                <LineBoyNavbar />
                <ClosedParty />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/pastloanview" element={
              <div>
                <Navbar />
                <ViewPastLoan />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/individualloanview" element={
              <div>
                <Navbar />
                <IndividualView />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/openingbalance" element={
              <div>
                <Navbar />
                <ThitamNav />
                <OpeningBalance />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/thitam" element={
              <div>
                <Navbar />
                <ThitamNav />
                <Thitam />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/addhead" element={
              <div>
                <Navbar />
                <ThitamNav />
                <AddHead />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/balancesheet" element={
              <div>
                <Navbar />
                <ThitamNav />
                <BalanceSheet />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/individualhead" element={
              <div>
                <Navbar />
                <ThitamNav />
                <IndividualHead />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/outstandingbalance" element={
              <div>
                <Navbar />
                <ThitamNav />
                <OutstandingBalance />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/trailsheet" element={
              <div>
                <Navbar />
                <ThitamNav />
                <TrialSheet />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/account" element={
              <div>
                <Navbar />
                <ThitamNav />
                <Account />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/outstandingbalance" element={
              <div>
                <Navbar />
                <ThitamNav />
                <OutstandingBalance />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/todaylist" element={
              <div>
                <LineBoyNavbar />
                <TodayListLB />
              </div>
            } />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/directentry" element={
              <div>
                <LineBoyNavbar />
                <DirectEntryLB />
              </div>
            } />
          </Route>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
