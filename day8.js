let testdir = 'LLR';
let rawMap = `AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`; 

let raw = `LFM = (PCJ, GQH)
THP = (SPP, MKB)
PBL = (VVX, JMM)
DSR = (BST, MPD)
QKF = (DSR, KGX)
AAA = (SLH, CVN)
DSH = (DVN, VXT)
VTK = (NSF, QJM)
QQR = (FNB, CBM)
RQV = (XQQ, NQQ)
CGV = (CCB, FTX)
RXL = (HXQ, HLQ)
MQP = (MSH, TJB)
MPL = (JSJ, TJR)
XQK = (RQT, JKB)
GXT = (JFP, MTT)
LHK = (BVR, MFH)
BXH = (PGR, NDC)
FFV = (MJC, TLD)
TFM = (DKJ, RTC)
MVG = (TNC, PXR)
QXN = (CGV, KKM)
LTN = (MQC, XGD)
NLP = (SQQ, DKG)
QTK = (MBH, GJX)
SSR = (DHV, NHN)
DGJ = (QSX, CKB)
SFD = (GRS, DLD)
HBT = (NVN, HJF)
VKH = (CBT, CBT)
VRH = (FVN, JNB)
HTJ = (JNB, FVN)
BDL = (SQS, QVX)
MMC = (MJC, TLD)
RBL = (VNF, BXD)
RNM = (HJQ, PJF)
CTZ = (NCP, PLT)
JFK = (TPJ, JGX)
HPJ = (MMC, FFV)
RJC = (RBH, DFJ)
DHL = (RJC, JFD)
LVR = (BBB, LHK)
LFD = (GCQ, SGC)
BVG = (BSQ, QXH)
DVN = (MTL, NDG)
XGD = (TML, JQL)
RQS = (VXX, BDV)
CPC = (PGB, SVP)
QLQ = (CLK, CBH)
RXZ = (SHG, MDS)
NTR = (RGP, PNX)
BBB = (MFH, BVR)
RGK = (FRD, FRD)
JLV = (DVV, GSF)
NLS = (VFF, HCX)
RHC = (DKG, SQQ)
NVB = (TTG, QTK)
SLZ = (DJM, BVG)
BFK = (SKJ, BBD)
HXX = (XQK, BVT)
SKS = (SLL, FQH)
SGB = (RLT, RHK)
NPD = (RFJ, DJN)
XSJ = (TSF, MVT)
LLH = (RPV, VML)
NXD = (DJS, FJG)
GJX = (SGS, LBJ)
FBV = (CXG, DCJ)
FRX = (GDV, RQB)
SDC = (RGC, THM)
JCT = (CSC, GNM)
SPS = (MLP, TRQ)
BNG = (PFC, CLX)
SHH = (LPM, VRC)
SGC = (FCH, JLC)
FJB = (MVK, JKT)
DRN = (KGL, LTN)
RJB = (NTR, BDN)
DMC = (JBM, KNV)
HBG = (RQB, GDV)
VRC = (RDD, MRD)
JJP = (GQC, VMP)
PLB = (VKX, BGL)
DVV = (QTS, NHG)
LGL = (SSX, JRQ)
RGC = (DVG, RDQ)
GPK = (DDL, FLG)
NVN = (HPJ, SFK)
DVQ = (JFJ, FRC)
VDP = (PFL, GLN)
CVN = (HNX, QKF)
QXP = (VTG, BDC)
LKT = (SBP, SBP)
QSX = (FNN, FKT)
CSC = (HPQ, SLS)
FNN = (DCV, JKF)
MTH = (NVN, HJF)
TPJ = (HNM, NGV)
NHN = (VCC, RXL)
BHF = (JKK, LFD)
HXQ = (VNH, FBV)
KDR = (HDN, HJJ)
SVD = (VRK, STT)
FGJ = (TNM, CRD)
XFF = (NPD, RXQ)
TNC = (XKT, LRP)
VBM = (GJM, PBK)
XBV = (DGJ, QJN)
GXH = (LVK, QGX)
SLH = (HNX, QKF)
ZZZ = (CVN, SLH)
RTC = (TPH, FJT)
NQP = (MJH, MSP)
XSD = (STT, VRK)
HJJ = (XMV, TJX)
JFP = (XSV, KBQ)
FTD = (NMN, PXX)
NVQ = (MSP, MJH)
SHC = (PTV, XDR)
DCV = (TFX, TFX)
BTX = (JJG, FLL)
RDQ = (DCF, FRH)
MTT = (KBQ, XSV)
DRB = (RML, LGR)
PBD = (VSX, FRS)
HFS = (KBM, KSJ)
SKJ = (NXN, LJM)
MTS = (GJC, SQX)
BRL = (TMJ, JTT)
TTQ = (KFC, DPL)
LQF = (DJS, FJG)
TKG = (JFD, RJC)
PGB = (BFJ, BQJ)
BQX = (VHC, PQH)
MRD = (BTB, NJK)
LJF = (XQR, PMH)
BCL = (VBK, JHN)
BHQ = (VMB, SQF)
BSR = (LPM, VRC)
VNK = (GBH, LPQ)
KHJ = (NJG, QQL)
VMB = (BBK, VXF)
QJM = (QDN, VFV)
KFC = (FSM, PMF)
JVN = (DMJ, SPR)
MVT = (RGM, HDH)
PQB = (BVP, NTH)
QQF = (KJP, BDP)
RGP = (JJP, MFM)
DLD = (VSG, BDL)
SCV = (CBT, LHV)
VTD = (KLC, QVL)
FCH = (GGR, TFM)
GJR = (QMX, CFM)
PMH = (GSG, JSF)
DCJ = (CDJ, TRP)
QJX = (NVQ, NQP)
DJN = (JFK, HFM)
DQP = (DSS, PBL)
XXH = (NTX, QLG)
MXK = (JTT, TMJ)
FDL = (JCT, TRR)
MGA = (PLT, NCP)
HPS = (RFQ, VXV)
SBC = (NPD, RXQ)
XPD = (VHH, PDH)
SRX = (SSX, JRQ)
CKJ = (MQQ, QJX)
FKT = (DCV, JKF)
JKP = (VFF, HCX)
JMN = (XSJ, CQP)
GLN = (SFQ, SGB)
PTV = (JNS, FXR)
FXM = (NTR, BDN)
DJS = (XMQ, KSN)
LVC = (FRD, PNN)
JPD = (PQP, XCX)
GQC = (NSQ, GJD)
SFK = (FFV, MMC)
JBD = (TFG, MSN)
BSZ = (RGR, FTD)
SQX = (XRQ, PQB)
PPV = (VBD, SNX)
JSF = (FRT, MVG)
JMT = (TJG, BNV)
JMJ = (DCX, BNG)
KJP = (QFH, VSP)
VXV = (SHM, NMD)
KLC = (XLB, MCH)
JMD = (XQQ, NQQ)
PJN = (FDL, BQC)
PLT = (MCP, VHB)
BGL = (DSC, PSN)
RXH = (SLH, CVN)
VSG = (QVX, SQS)
BDC = (RPS, RBL)
JMM = (XMJ, XDG)
RHK = (QKH, BTX)
RQX = (KSM, PLB)
FQH = (MHT, CDG)
SRM = (PLV, QGV)
HNX = (DSR, KGX)
JNS = (RJN, RXD)
MLP = (JMN, PCR)
LVK = (JHS, QMJ)
PRG = (TJB, MSH)
VGS = (JXR, JLP)
XQQ = (KTJ, BMN)
DGA = (FTD, RGR)
HTX = (MTG, XBV)
CCB = (TXB, VTK)
RQT = (TLR, LDB)
QMX = (SHQ, DPB)
MDS = (KQD, DMC)
JDC = (LCL, SSR)
NHG = (JMD, RQV)
CBM = (DBH, BHQ)
RKB = (VGP, LLP)
SJD = (PLB, KSM)
CDG = (FBC, TJF)
QGV = (TLB, QVB)
BDS = (SPS, BGH)
DGF = (VKH, VKH)
RLV = (MKB, SPP)
SHG = (KQD, DMC)
KQD = (KNV, JBM)
RMV = (DVV, GSF)
MSH = (XXH, TVV)
FJX = (BVG, DJM)
KCV = (PLV, QGV)
MFH = (HCQ, CNF)
TLD = (MCK, KXR)
SLB = (VGP, LLP)
KSN = (HFF, PPV)
RGV = (BDP, KJP)
CNF = (NBF, PCM)
TJF = (GQB, JNP)
NDG = (MTS, JLF)
VHH = (FXM, RJB)
MPH = (CLK, CBH)
RPM = (NXD, LQF)
JHS = (PGH, MXS)
TRJ = (PJF, HJQ)
RJK = (SSR, LCL)
DPB = (SLB, RKB)
XXD = (FFJ, BBX)
QBX = (CRF, VBM)
RMX = (NGM, CPL)
VXT = (MTL, NDG)
KQN = (QQF, RGV)
SFQ = (RLT, RHK)
QGJ = (XDR, PTV)
MSN = (RMV, JLV)
HCQ = (PCM, NBF)
GKF = (PLT, NCP)
VCC = (HLQ, HXQ)
MSJ = (JKP, NLS)
RFF = (BXM, SPH)
FBD = (DGF, VNG)
GLJ = (MQF, RRT)
QRN = (MTH, HBT)
QGS = (TNM, CRD)
XPP = (FNB, CBM)
QQQ = (GHK, DVD)
RBK = (PPQ, XTT)
HHG = (DPL, KFC)
SBP = (FTD, RGR)
MJH = (MLQ, QTG)
JLX = (BDS, TMM)
DVG = (FRH, DCF)
DFJ = (NSK, PDS)
RHJ = (DKM, TDJ)
FQN = (JKT, MVK)
RMD = (LGR, RML)
JTB = (VDP, BSL)
GJM = (NLD, RHJ)
LGP = (CPC, NQN)
JHN = (NBQ, MSJ)
SQF = (BBK, VXF)
HST = (CFM, QMX)
LBJ = (TBP, VNK)
SNX = (PCX, RMX)
PJF = (MGX, SKS)
RRT = (JTB, LSC)
JTT = (MLM, GLJ)
DLQ = (JBQ, RND)
LGR = (QRV, XXD)
LPT = (BSR, SHH)
HQB = (BRL, MXK)
TRP = (LFM, LCT)
JKT = (RNM, TRJ)
MXS = (GQR, KQN)
MKB = (LVQ, NNX)
NDC = (RGK, LVC)
LFN = (RRL, XNF)
SHQ = (RKB, SLB)
JGX = (NGV, HNM)
RPN = (BCL, CDR)
JSJ = (CRH, FHR)
FRH = (THR, TSX)
BNV = (RXS, LGP)
FLL = (GSR, PVF)
DNS = (JLP, JXR)
HDN = (TJX, XMV)
HJQ = (SKS, MGX)
TNX = (SJD, RQX)
XQD = (BFR, MDM)
GNM = (HPQ, SLS)
NML = (DGF, VNG)
BXM = (FJB, FQN)
MSP = (QTG, MLQ)
PBJ = (XLJ, TKD)
MNN = (DNS, VGS)
RBH = (PDS, NSK)
BFJ = (KNT, SDP)
CRD = (PBC, BFK)
TJB = (XXH, TVV)
PDJ = (SRN, SRN)
XJS = (HBG, FRX)
BBK = (LLH, PNP)
QQL = (MFR, KKZ)
FVN = (LGL, SRX)
LRP = (GXT, BSF)
SVX = (MSN, TFG)
PFC = (PCP, FGB)
XMJ = (GKF, GKF)
LLL = (DNS, VGS)
VSX = (TKG, DHL)
RND = (SBC, XFF)
MLQ = (DXT, JMT)
XLC = (TTG, QTK)
TJG = (RXS, LGP)
DPL = (PMF, FSM)
PCR = (CQP, XSJ)
BSQ = (XSD, SVD)
DHP = (HPS, MNQ)
SCB = (HXX, NQV)
FFJ = (LJF, BSV)
FTX = (VTK, TXB)
TRQ = (PCR, JMN)
GDL = (PBD, BJK)
MLM = (RRT, MQF)
TLA = (QXP, MKM)
SMN = (LFN, FVJ)
RRL = (CKJ, JNK)
BDP = (VSP, QFH)
CBC = (DVN, VXT)
JLP = (PTL, SJK)
FRS = (TKG, DHL)
SQQ = (MPL, QBQ)
DVD = (RLK, JPD)
PQP = (LGN, SFD)
FSM = (JDC, RJK)
PSN = (XJS, NRN)
QDN = (SHC, QGJ)
RJN = (XPD, GMS)
HRT = (PPQ, XTT)
CBH = (SRM, KCV)
FSC = (XBV, MTG)
DCX = (CLX, PFC)
XQR = (GSG, JSF)
HBP = (XDT, KNF)
BQJ = (KNT, SDP)
CDJ = (LFM, LCT)
JNK = (MQQ, QJX)
BVP = (MTF, SDC)
TLR = (RHC, NLP)
SJK = (DQP, LMN)
NJG = (MFR, MFR)
RLK = (XCX, PQP)
TPH = (BXH, GSQ)
NSK = (DDS, MLV)
HLQ = (FBV, VNH)
JTP = (FSN, QQQ)
PGH = (KQN, GQR)
SRJ = (PXK, GDL)
TJR = (FHR, CRH)
XDT = (BKJ, PPJ)
GQH = (RLV, THP)
GRS = (BDL, VSG)
DLJ = (CRF, VBM)
VMP = (GJD, NSQ)
MKM = (VTG, BDC)
PVF = (VLX, LBB)
GPV = (SRJ, FNQ)
NTL = (FSN, QQQ)
FQL = (BFR, MDM)
TMJ = (MLM, GLJ)
XKT = (GXT, BSF)
PCX = (NGM, CPL)
XMV = (HQB, JRJ)
QKH = (FLL, JJG)
VQP = (FLG, DDL)
SLS = (CKK, HVF)
THM = (RDQ, DVG)
PPJ = (GCT, TNX)
TMM = (BGH, SPS)
GVL = (PCG, RQS)
DCF = (TSX, THR)
BJK = (FRS, VSX)
SPP = (NNX, LVQ)
QGX = (QMJ, JHS)
RPV = (HGR, DHP)
MTG = (DGJ, QJN)
KGL = (XGD, MQC)
DHD = (RND, JBQ)
BXD = (KFH, HTM)
KGX = (MPD, BST)
QVB = (LKT, RGT)
CBK = (RDG, PKT)
BTB = (JMJ, CTD)
FSN = (DVD, GHK)
KXR = (FFT, DVQ)
TML = (GPV, PVN)
VXF = (PNP, LLH)
DBH = (SQF, VMB)
FCP = (JKK, LFD)
RXQ = (DJN, RFJ)
NTH = (SDC, MTF)
JBM = (SVX, JBD)
PNN = (FJX, SLZ)
GQR = (QQF, RGV)
PXR = (LRP, XKT)
VRK = (RDJ, SMN)
LDB = (RHC, NLP)
LHV = (RXH, ZZZ)
FNB = (DBH, BHQ)
MFM = (VMP, GQC)
PGV = (PKT, RDG)
SPR = (XJP, SHD)
CCR = (LQF, NXD)
GJC = (XRQ, PQB)
LGN = (GRS, DLD)
RDG = (FBD, NML)
MCP = (DLC, TGK)
NMD = (XFR, GRK)
MVK = (TRJ, RNM)
JKF = (TFX, KHJ)
XFR = (SMG, JNQ)
NGM = (XPX, JLX)
MFD = (GVL, MBR)
RNT = (CDR, BCL)
VVX = (XMJ, XMJ)
GNC = (HST, GJR)
CRF = (PBK, GJM)
JKK = (GCQ, SGC)
GBH = (QDR, RFF)
FJG = (XMQ, KSN)
GDV = (GQN, GXH)
XLB = (FMN, JVN)
KNV = (JBD, SVX)
PXX = (HHG, TTQ)
TDJ = (MFD, QJT)
QLG = (PJN, VFS)
NRN = (HBG, FRX)
SHM = (GRK, XFR)
FHV = (HXX, NQV)
QFH = (GNC, CHX)
PCM = (QLQ, MPH)
VLX = (QMR, PBJ)
RPP = (HRT, RBK)
JXR = (SJK, PTL)
LPQ = (QDR, RFF)
BFR = (STC, PJT)
XTT = (CBC, DSH)
HVF = (VTD, KDC)
JFJ = (FCP, BHF)
LVQ = (PRG, MQP)
JFD = (RBH, DFJ)
HFM = (TPJ, JGX)
BSV = (XQR, PMH)
JLC = (GGR, TFM)
NSQ = (FHV, SCB)
NCP = (VHB, MCP)
JKB = (LDB, TLR)
BLX = (PDJ, GBX)
SVP = (BQJ, BFJ)
VSP = (CHX, GNC)
SPH = (FJB, FQN)
RPS = (VNF, BXD)
QMR = (TKD, XLJ)
QMJ = (MXS, PGH)
JNB = (LGL, SRX)
RGM = (JTP, NTL)
GHK = (JPD, RLK)
TFX = (NJG, NJG)
NBQ = (JKP, NLS)
NTX = (VFS, PJN)
QTS = (RQV, JMD)
LMN = (DSS, PBL)
CLK = (SRM, KCV)
MPD = (RMD, DRB)
PDS = (DDS, MLV)
NNX = (PRG, MQP)
BST = (DRB, RMD)
DSG = (SGV, DVB)
KDC = (QVL, KLC)
VKX = (PSN, DSC)
LJM = (DBB, QXN)
VFV = (SHC, QGJ)
FXR = (RJN, RXD)
HGR = (HPS, MNQ)
BMN = (CCR, RPM)
CRH = (FSC, HTX)
QRV = (BBX, FFJ)
CKK = (VTD, KDC)
SDP = (RNT, RPN)
XLJ = (JTX, QRN)
BSL = (PFL, GLN)
GJD = (FHV, SCB)
VNH = (DCJ, CXG)
BCB = (MXJ, LVR)
NBF = (MPH, QLQ)
MCK = (DVQ, FFT)
RFJ = (HFM, JFK)
BBD = (LJM, NXN)
FMN = (SPR, DMJ)
JXK = (GPK, VQP)
SLL = (MHT, CDG)
TRR = (GNM, CSC)
MJC = (KXR, MCK)
MHT = (FBC, TJF)
TSF = (HDH, RGM)
FLG = (FQL, XQD)
MGX = (SLL, FQH)
RGR = (NMN, PXX)
RDA = (BVG, DJM)
VXX = (DHD, DLQ)
DXT = (BNV, TJG)
LCL = (DHV, NHN)
CKB = (FNN, FKT)
KNH = (LVR, MXJ)
GSQ = (PGR, NDC)
CFM = (DPB, SHQ)
HDH = (JTP, NTL)
NSF = (VFV, QDN)
HSF = (KSJ, KBM)
GSR = (VLX, LBB)
GCT = (RQX, SJD)
RBN = (XDT, KNF)
XNF = (JNK, CKJ)
TCF = (RBK, HRT)
DPA = (MDS, SHG)
QTG = (JMT, DXT)
RGT = (SBP, BSZ)
XCX = (SFD, LGN)
KSJ = (KDR, GKG)
GQN = (QGX, LVK)
MDM = (PJT, STC)
KKZ = (MKM, QXP)
MQC = (JQL, TML)
VFS = (FDL, BQC)
TJX = (JRJ, HQB)
BSF = (MTT, JFP)
VMD = (PQH, VHC)
JTX = (HBT, MTH)
MCH = (FMN, JVN)
VBK = (MSJ, NBQ)
TBP = (GBH, LPQ)
TVX = (VQP, GPK)
NQN = (SVP, PGB)
SMG = (XLC, NVB)
SHD = (BCB, KNH)
JLF = (SQX, GJC)
GSF = (QTS, NHG)
BDN = (PNX, RGP)
GRK = (SMG, JNQ)
PLV = (TLB, TLB)
SQS = (HTJ, VRH)
PDH = (FXM, RJB)
VGP = (LLL, MNN)
JRQ = (TVT, BLX)
CLX = (PCP, FGB)
PMF = (JDC, RJK)
JRJ = (BRL, MXK)
XMQ = (PPV, HFF)
BVT = (RQT, JKB)
FJT = (BXH, GSQ)
FRT = (TNC, PXR)
QVL = (XLB, MCH)
TNM = (BFK, PBC)
XPX = (BDS, TMM)
XCN = (SHH, BSR)
PKT = (FBD, NML)
TLB = (LKT, LKT)
TFG = (RMV, JLV)
SRN = (MDS, SHG)
FRC = (BHF, FCP)
GGR = (RTC, DKJ)
KFH = (JXK, TVX)
JNQ = (XLC, NVB)
MTF = (RGC, THM)
STT = (RDJ, SMN)
CPL = (XPX, JLX)
FGB = (XPP, QQR)
DLC = (RPP, TCF)
DJM = (QXH, BSQ)
MBH = (SGS, LBJ)
VBD = (RMX, PCX)
CXG = (TRP, CDJ)
NGV = (VMD, BQX)
GQB = (DRN, NXS)
FHR = (HTX, FSC)
DDL = (FQL, XQD)
FBC = (JNP, GQB)
DKJ = (TPH, FJT)
RQB = (GQN, GXH)
LPM = (RDD, MRD)
BKJ = (GCT, TNX)
GMS = (PDH, VHH)
HTM = (JXK, TVX)
PPQ = (CBC, DSH)
MBR = (RQS, PCG)
PJT = (FGJ, QGS)
PQH = (RBN, HBP)
CBT = (RXH, RXH)
CHX = (HST, GJR)
BQC = (JCT, TRR)
NJK = (JMJ, CTD)
QVX = (VRH, HTJ)
KKM = (FTX, CCB)
NXN = (DBB, QXN)
JQL = (GPV, PVN)
MFR = (QXP, MKM)
VML = (HGR, DHP)
PCJ = (THP, RLV)
XRQ = (BVP, NTH)
PXK = (PBD, BJK)
HCX = (HFS, HSF)
QJT = (MBR, GVL)
RLT = (BTX, QKH)
DKG = (QBQ, MPL)
CQP = (TSF, MVT)
HFF = (VBD, SNX)
KNF = (BKJ, PPJ)
FFT = (JFJ, FRC)
DDS = (PGK, DSG)
PFL = (SGB, SFQ)
RXS = (CPC, NQN)
XSV = (XCN, LPT)
MNQ = (VXV, RFQ)
PVN = (SRJ, FNQ)
VNF = (KFH, HTM)
HPQ = (HVF, CKK)
PGK = (DVB, SGV)
VHC = (HBP, RBN)
GBX = (SRN, RXZ)
SGV = (CBK, PGV)
TVV = (QLG, NTX)
KNT = (RPN, RNT)
TXB = (NSF, QJM)
PCP = (XPP, QQR)
PCG = (BDV, VXX)
MQF = (LSC, JTB)
QJN = (CKB, QSX)
QXH = (SVD, XSD)
LCT = (PCJ, GQH)
GKG = (HDN, HJJ)
TKD = (JTX, QRN)
KBQ = (XCN, LPT)
KSM = (VKX, BGL)
MQQ = (NQP, NVQ)
VFF = (HFS, HSF)
SSX = (TVT, TVT)
DSS = (VVX, VVX)
QDR = (SPH, BXM)
PGR = (RGK, RGK)
RML = (QRV, XXD)
XDR = (JNS, FXR)
DVB = (PGV, CBK)
TSX = (QBX, DLJ)
QBQ = (TJR, JSJ)
BBX = (LJF, BSV)
PTL = (DQP, LMN)
PBC = (BBD, SKJ)
VHB = (DLC, TGK)
XJP = (BCB, KNH)
STC = (QGS, FGJ)
FNQ = (PXK, GDL)
MXJ = (LHK, BBB)
JNP = (NXS, DRN)
SGS = (TBP, VNK)
RFQ = (SHM, NMD)
MLV = (DSG, PGK)
CDR = (VBK, JHN)
CTD = (DCX, BNG)
FRD = (FJX, FJX)
GCQ = (FCH, JLC)
NXS = (KGL, LTN)
JBQ = (SBC, XFF)
NLD = (DKM, TDJ)
VTG = (RBL, RPS)
JJG = (GSR, PVF)
DKM = (QJT, MFD)
RDJ = (LFN, FVJ)
KTJ = (RPM, CCR)
GSG = (FRT, MVG)
MTL = (JLF, MTS)
PNP = (RPV, VML)
TTG = (MBH, GJX)
LSC = (VDP, BSL)
THR = (DLJ, QBX)
NQV = (BVT, XQK)
LBB = (PBJ, QMR)
NQQ = (KTJ, BMN)
DMJ = (XJP, SHD)
DSC = (XJS, NRN)
RXD = (GMS, XPD)
KBM = (GKG, KDR)
LLP = (LLL, MNN)
HNM = (VMD, BQX)
VNG = (VKH, SCV)
XDG = (GKF, CTZ)
PNX = (MFM, JJP)
PBK = (RHJ, NLD)
BVR = (CNF, HCQ)
DHV = (VCC, RXL)
TGK = (RPP, TCF)
RDD = (NJK, BTB)
NMN = (HHG, TTQ)
HJF = (HPJ, SFK)
BDV = (DLQ, DHD)
TVT = (PDJ, PDJ)
BGH = (TRQ, MLP)
FVJ = (RRL, XNF)
DBB = (KKM, CGV)`

const convertRaw = (str)=>{
    let a = str.split("\n");
    let path = new Map();
    let b = a.map(p=> p.split("="));
    let c = b.map(p=> [p[0].trim(),p[1].replace(/[(]|[)]/g, "").split(",")]);
    let d = c.map(p=>[p[0],[p[1][0].trim(),p[1][1].trim()]])
    for(let i =0;i<c.length;i++){
        path.set(d[i][0],d[i][1]);
    }

    return path;
}


let direction = `LRLRLLRRLLRRLRRLRRRLLRLRLRLRLRRLRRRLRLRRLRLLRRLLRLRRLRLRRLLRRRLRLRLRRRLRLLRRRLLLLLLRRRLRRLLLRRLRLRRLRRLRLRRLRRLLRRLRRRLRRRLLRLRLLLRRLLLRRLLRRLRLLRRRLRRRLRRRLRLRRLRRLLLRRRLRRLLRRLRRRLRLRLRRLRRLRRRLRRRLRLLLLRRRLRLRRRLRRRLLRLRRLRRLLRLLLRRLRLRRLRRRLRRRLRRRLLRRRLRLLRRRLRRRLRRRLRRRLRRLRRRLLRRLLRLRLRRRLRRRLRLRRRR`
let testInput = convertRaw(rawMap);
//console.log(testInput);
let input = convertRaw(raw);

const findSteps = (dir,path)=>{
    let i = 0;
    let foundZZZ = false;
    let node = 'AAA'
    let network = path.get(node);
    let step = 0;
    while(foundZZZ !== true){
        if(i >= dir.length){
            i = 0;
        }
        let curr = dir[i];
        if(curr === "L"){
            node = network[0];
            if(node === 'ZZZ'){
                foundZZZ = true;
            }
        } else{
            node = network[1]
            if(node === 'ZZZ'){
                foundZZZ = true;
            };
        }
        network = path.get(node);
        i++
        step++;

    }
    return step
}

let result = findSteps(direction,input);

console.log(result);