// Database: s = Size(mm2), r = Rating(A), v = Voltage Drop (mV/A/m)
const database = {
  "CVV": {
    "Cables installed in air": {
      "Two cables spaced": [
        {s:1.5, r:24, v:30},
        {s:2.5, r:31, v:19},
        {s:4, r:45, v:10},
        {s:6, r:58, v:6},
        {s:10, r:76, v:4.1},
        {s:16, r:101, v:3},
        {s:25, r:135, v:1.8},
        {s:35, r:169, v:1.4},
        {s:50, r:207, v:0.97},
        {s:70, r:262, v:0.7},
        {s:95, r:325, v:0.53},
        {s:120, r:379, v:0.45},
        {s:150, r:435, v:0.39},
        {s:185, r:504, v:0.35},
        {s:240, r:602, v:0.31},
        {s:300, r:697, v:0.29},
        {s:400, r:815, v:0.29},
        {s:500, r:948, v:0.26},
        {s:630, r:1108, v:0.25},
        {s:800, r:1277, v:0.25},
        {s:1000, r:1437, v:0.24}
      ],
      "Trefoil touching": [
        {s:1.5, r:21, v:26},
        {s:2.5, r:27, v:14},
        {s:4, r:36, v:9.5},
        {s:6, r:40, v:7.5},
        {s:10, r:58, v:3.8},
        {s:16, r:85, v:2.4},
        {s:25, r:118, v:1.5},
        {s:35, r:145, v:1.1},
        {s:50, r:173, v:0.82},
        {s:70, r:219, v:0.58},
        {s:95, r:273, v:0.43},
        {s:120, r:318, v:0.35},
        {s:150, r:365, v:0.3},
        {s:185, r:423, v:0.25},
        {s:240, r:505, v:0.22},
        {s:300, r:583, v:0.19},
        {s:400, r:679, v:0.18},
        {s:500, r:782, v:0.16},
        {s:630, r:900, v:0.15},
        {s:800, r:1080, v:0.15},
        {s:1000, r:1134, v:0.14}
      ],
      "Laid flat spaced": [
        {s:1.5, r:23, v:26},
        {s:2.5, r:30, v:15},
        {s:4, r:43, v:9.5},
        {s:6, r:50, v:6.8},
        {s:10, r:70, v:3.8},
        {s:16, r:95, v:2.5},
        {s:25, r:128, v:1.7},
        {s:35, r:160, v:1.2},
        {s:50, r:201, v:0.83},
        {s:70, r:255, v:0.6},
        {s:95, r:317, v:0.47},
        {s:120, r:368, v:0.4},
        {s:150, r:424, v:0.35},
        {s:185, r:492, v:0.33},
        {s:240, r:588, v:0.32},
        {s:300, r:681, v:0.31},
        {s:400, r:796, v:0.28},
        {s:500, r:927, v:0.27},
        {s:630, r:1083, v:0.25},
        {s:800, r:1249, v:0.23},
        {s:1000, r:1412, v:0.22}
      ],
      "Two core": [
        {s:1.5, r:22, v:27},
        {s:2.5, r:29, v:16},
        {s:4, r:38, v:10},
        {s:6, r:45, v:7},
        {s:10, r:68, v:4},
        {s:16, r:91, v:2.8},
        {s:25, r:122, v:1.7},
        {s:35, r:149, v:1.3},
        {s:50, r:182, v:0.94},
        {s:70, r:229, v:0.66},
        {s:95, r:284, v:0.49},
        {s:120, r:330, v:0.4},
        {s:150, r:379, v:0.34},
        {s:185, r:436, v:0.29},
        {s:240, r:519, v:0.24},
        {s:300, r:598, v:0.21},
        {s:400, r:695, v:0.19}
      ],
      "Three and four core": [
        {s:1.5, r:19, v:24},
        {s:2.5, r:24, v:13},
        {s:4, r:32, v:9},
        {s:6, r:38, v:6},
        {s:10, r:55, v:3.3},
        {s:16, r:79, v:2.4},
        {s:25, r:103, v:1.5},
        {s:35, r:128, v:1.1},
        {s:50, r:156, v:0.82},
        {s:70, r:197, v:0.57},
        {s:95, r:243, v:0.42},
        {s:120, r:284, v:0.35},
        {s:150, r:324, v:0.29},
        {s:185, r:374, v:0.25},
        {s:240, r:446, v:0.21},
        {s:300, r:572, v:0.18},
        {s:400, r:593, v:0.17}
      ]
    },
    "Cables laid direct in ground": {
      "Two cables spaced": [
        {s:1.5, r:33, v:32},
        {s:2.5, r:44, v:20},
        {s:4, r:59, v:11},
        {s:6, r:75, v:9},
        {s:10, r:101, v:4.8},
        {s:16, r:128, v:3.2},
        {s:25, r:168, v:1.9},
        {s:35, r:201, v:1.4},
        {s:50, r:238, v:0.97},
        {s:70, r:292, v:0.67},
        {s:95, r:349, v:0.5},
        {s:120, r:396, v:0.42},
        {s:150, r:443, v:0.36},
        {s:185, r:497, v:0.31},
        {s:240, r:571, v:0.26},
        {s:300, r:640, v:0.23},
        {s:400, r:708, v:0.22},
        {s:500, r:780, v:0.2},
        {s:630, r:856, v:0.19},
        {s:800, r:895, v:0.18},
        {s:1000, r:939, v:0.18}
      ],
      "Trefoil touching": [
        {s:1.5, r:29, v:25},
        {s:2.5, r:38, v:15},
        {s:4, r:53, v:9.5},
        {s:6, r:66, v:6.4},
        {s:10, r:86, v:3.8},
        {s:16, r:110, v:2.4},
        {s:25, r:142, v:1.5},
        {s:35, r:170, v:1.1},
        {s:50, r:203, v:0.82},
        {s:70, r:248, v:0.58},
        {s:95, r:297, v:0.44},
        {s:120, r:337, v:0.36},
        {s:150, r:376, v:0.31},
        {s:185, r:423, v:0.27},
        {s:240, r:485, v:0.23},
        {s:300, r:542, v:0.2},
        {s:400, r:600, v:0.19},
        {s:500, r:660, v:0.18},
        {s:630, r:721, v:0.16},
        {s:800, r:756, v:0.16},
        {s:1000, r:797, v:0.15}
      ],
      "Two core": [
        {s:1.5, r:32, v:29},
        {s:2.5, r:41, v:17},
        {s:4, r:55, v:11},
        {s:6, r:69, v:7.4},
        {s:10, r:92, v:4.4},
        {s:16, r:119, v:2.8},
        {s:25, r:158, v:1.7},
        {s:35, r:190, v:1.3},
        {s:50, r:225, v:0.94},
        {s:70, r:277, v:0.66},
        {s:95, r:332, v:0.49},
        {s:120, r:377, v:0.4},
        {s:150, r:422, v:0.34},
        {s:185, r:478, v:0.29},
        {s:240, r:561, v:0.24},
        {s:300, r:616, v:0.21},
        {s:400, r:693, v:0.19}
      ],
      "Three and four core": [
        {s:1.5, r:27, v:25},
        {s:2.5, r:35, v:15},
        {s:4, r:47, v:9.5},
        {s:6, r:59, v:6.4},
        {s:10, r:78, v:3.8},
        {s:16, r:101, v:2.4},
        {s:25, r:132, v:1.5},
        {s:35, r:159, v:1.1},
        {s:50, r:188, v:0.82},
        {s:70, r:233, v:0.57},
        {s:95, r:279, v:0.42},
        {s:120, r:317, v:0.35},
        {s:150, r:355, v:0.29},
        {s:185, r:401, v:0.25},
        {s:240, r:462, v:0.21},
        {s:300, r:517, v:0.18},
        {s:400, r:580, v:0.17}
      ]
    },
    "Cables run in single way ducts": {
      "Two cables ducts touching": [
        {s:1.5, r:30, v:34},
        {s:2.5, r:41, v:22},
        {s:4, r:59, v:12},
        {s:6, r:69, v:10},
        {s:10, r:90, v:5},
        {s:16, r:114, v:3.4},
        {s:25, r:150, v:2},
        {s:35, r:175, v:1.4},
        {s:50, r:216, v:1},
        {s:70, r:262, v:0.76},
        {s:95, r:308, v:0.61},
        {s:120, r:341, v:0.54},
        {s:150, r:375, v:0.48},
        {s:185, r:414, v:0.44},
        {s:240, r:463, v:0.4},
        {s:300, r:509, v:0.37},
        {s:400, r:545, v:0.34},
        {s:500, r:585, v:0.32},
        {s:630, r:632, v:0.3},
        {s:800, r:662, v:0.28},
        {s:1000, r:703, v:0.27}
      ],
      "Three cables: ducts trefoil touching": [
        {s:1.5, r:28, v:27},
        {s:2.5, r:35, v:16},
        {s:4, r:48, v:10.5},
        {s:6, r:60, v:7},
        {s:10, r:84, v:4},
        {s:16, r:107, v:2.6},
        {s:25, r:139, v:1.6},
        {s:35, r:168, v:1.2},
        {s:50, r:199, v:0.88},
        {s:70, r:241, v:0.66},
        {s:95, r:282, v:0.53},
        {s:120, r:311, v:0.47},
        {s:150, r:342, v:0.42},
        {s:185, r:375, v:0.38},
        {s:240, r:419, v:0.34},
        {s:300, r:459, v:0.32},
        {s:400, r:489, v:0.3},
        {s:500, r:523, v:0.28},
        {s:630, r:563, v:0.26},
        {s:800, r:587, v:0.25},
        {s:1000, r:621, v:0.23}
      ],
      "Two core": [
        {s:1.5, r:26, v:29},
        {s:2.5, r:34, v:17},
        {s:4, r:45, v:11},
        {s:6, r:57, v:7.4},
        {s:10, r:76, v:4.4},
        {s:16, r:98, v:2.8},
        {s:25, r:129, v:1.7},
        {s:35, r:154, v:1.3},
        {s:50, r:183, v:0.94},
        {s:70, r:225, v:0.66},
        {s:95, r:271, v:0.49},
        {s:120, r:309, v:0.4},
        {s:150, r:346, v:0.34},
        {s:185, r:393, v:0.29},
        {s:240, r:455, v:0.24},
        {s:300, r:510, v:0.21},
        {s:400, r:574, v:0.19}
      ],
      "Three and four core": [
        {s:1.5, r:22, v:25},
        {s:2.5, r:29, v:15},
        {s:4, r:38, v:9.5},
        {s:6, r:48, v:6.4},
        {s:10, r:64, v:3.8},
        {s:16, r:83, v:2.4},
        {s:25, r:107, v:1.5},
        {s:35, r:129, v:1.1},
        {s:50, r:153, v:0.82},
        {s:70, r:190, v:0.57},
        {s:95, r:228, v:0.42},
        {s:120, r:260, v:0.35},
        {s:150, r:292, v:0.29},
        {s:185, r:331, v:0.25},
        {s:240, r:382, v:0.21},
        {s:300, r:428, v:0.18},
        {s:400, r:490, v:0.17}
      ],
    }
  },
  "CXV": {
    "Cables installed in air": {
      "2-single core touching": [
        {s:1.5, r:28, v:30.86},
        {s:2.5, r:37, v:18.9},
        {s:4, r:52, v:11.76},
        {s:6, r:66, v:7.86},
        {s:10, r:91, v:4.67},
        {s:16, r:118, v:2.95},
        {s:25, r:161, v:1.87},
        {s:35, r:200, v:1.35},
        {s:50, r:242, v:1.01},
        {s:70, r:310, v:0.71},
        {s:95, r:377, v:0.52},
        {s:120, r:437, v:0.43},
        {s:150, r:504, v:0.36},
        {s:185, r:575, v:0.3},
        {s:240, r:679, v:0.25},
        {s:300, r:783, v:0.22},
        {s:400, r:940, v:0.2},
        {s:500, r:1083, v:0.19},
        {s:630, r:1254, v:0.18},
        {s:800, r:1460, v:0.17},
        {s:1000, r:1683, v:0.16}
      ],
      "3-single core touching": [
        {s:1.5, r:25, v:26.73},
        {s:2.5, r:34, v:16.37},
        {s:4, r:44, v:10.19},
        {s:6, r:55, v:6.81},
        {s:10, r:79, v:4.04},
        {s:16, r:110, v:2.55},
        {s:25, r:141, v:1.62},
        {s:35, r:176, v:1.17},
        {s:50, r:215, v:0.88},
        {s:70, r:279, v:0.62},
        {s:95, r:341, v:0.45},
        {s:120, r:399, v:0.38},
        {s:150, r:462, v:0.33},
        {s:185, r:531, v:0.28},
        {s:240, r:631, v:0.24},
        {s:300, r:731, v:0.21},
        {s:400, r:880, v:0.2},
        {s:500, r:1006, v:0.18},
        {s:630, r:1117, v:0.17},
        {s:800, r:1262, v:0.17},
        {s:1000, r:1432, v:0.16}
      ],
      "3-single core trefoil": [
        {s:1.5, r:24, v:26.73},
        {s:2.5, r:33, v:16.37},
        {s:4, r:43, v:10.19},
        {s:6, r:52, v:6.81},
        {s:10, r:75, v:4.04},
        {s:16, r:107, v:2.55},
        {s:25, r:135, v:1.62},
        {s:35, r:169, v:1.17},
        {s:50, r:207, v:0.87},
        {s:70, r:268, v:0.61},
        {s:95, r:328, v:0.45},
        {s:120, r:382, v:0.37},
        {s:150, r:443, v:0.32},
        {s:185, r:509, v:0.26},
        {s:240, r:604, v:0.22},
        {s:300, r:699, v:0.2},
        {s:400, r:839, v:0.17},
        {s:500, r:958, v:0.16},
        {s:630, r:1077, v:0.15},
        {s:800, r:1152, v:0.15},
        {s:1000, r:1240, v:0.14}
      ],
      "3-single core spaced horizontal": [
        {s:1.5, r:29, v:26.73},
        {s:2.5, r:39, v:16.37},
        {s:4, r:54, v:10.19},
        {s:6, r:68, v:6.81},
        {s:10, r:93, v:4.05},
        {s:16, r:120, v:2.56},
        {s:25, r:182, v:1.63},
        {s:35, r:226, v:1.19},
        {s:50, r:275, v:0.9},
        {s:70, r:353, v:0.65},
        {s:95, r:430, v:0.5},
        {s:120, r:500, v:0.42},
        {s:150, r:577, v:0.37},
        {s:185, r:661, v:0.33},
        {s:240, r:781, v:0.29},
        {s:300, r:902, v:0.28},
        {s:400, r:1085, v:0.26},
        {s:500, r:1253, v:0.25},
        {s:630, r:1454, v:0.25},
        {s:800, r:1696, v:0.24},
        {s:1000, r:1958, v:0.24}
      ],
      "3-single core spaced vertical": [
        {s:1.5, r:28, v:26.73},
        {s:2.5, r:38, v:16.37},
        {s:4, r:53, v:10.19},
        {s:6, r:67, v:6.81},
        {s:10, r:92, v:4.05},
        {s:16, r:119, v:2.56},
        {s:25, r:161, v:1.63},
        {s:35, r:201, v:1.19},
        {s:50, r:246, v:0.9},
        {s:70, r:318, v:0.65},
        {s:95, r:389, v:0.5},
        {s:120, r:454, v:0.42},
        {s:150, r:527, v:0.37},
        {s:185, r:605, v:0.33},
        {s:240, r:719, v:0.29},
        {s:300, r:833, v:0.28},
        {s:400, r:1008, v:0.26},
        {s:500, r:1169, v:0.25},
        {s:630, r:1362, v:0.25},
        {s:800, r:1595, v:0.24},
        {s:1000, r:1847, v:0.24}
      ],
      "2 loaded core": [
        {s:1.5, r:26, v:29},
        {s:2.5, r:36, v:18},
        {s:4, r:49, v:11.6},
        {s:6, r:63, v:7.7},
        {s:10, r:86, v:4.6},
        {s:16, r:115, v:2.9},
        {s:25, r:149, v:1.9},
        {s:35, r:185, v:1.3},
        {s:50, r:225, v:1},
        {s:70, r:289, v:0.7},
        {s:95, r:352, v:0.52},
        {s:120, r:410, v:0.42},
        {s:150, r:473, v:0.35},
        {s:185, r:542, v:0.29},
        {s:240, r:641, v:0.24},
        {s:300, r:741, v:0.21}
      ],
      "3 loaded core": [
        {s:1.5, r:23, v:27.7},
        {s:2.5, r:32, v:17.3},
        {s:4, r:42, v:11},
        {s:6, r:54, v:6.9},
        {s:10, r:75, v:4.1},
        {s:16, r:100, v:2.6},
        {s:25, r:127, v:1.6},
        {s:35, r:157, v:1.2},
        {s:50, r:192, v:0.87},
        {s:70, r:246, v:0.61},
        {s:95, r:298, v:0.45},
        {s:120, r:346, v:0.36},
        {s:150, r:399, v:0.3},
        {s:185, r:456, v:0.25},
        {s:240, r:538, v:0.21},
        {s:300, r:620, v:0.19},
      ],
    },
    "Cables laid direct in ground": {
      "Two cables touching, single-phase (ac)": [
        {s:16, r:142, v:2.9},
        {s:25, r:185, v:1.88},
        {s:35, r:226, v:1.27},
        {s:50, r:275, v:0.99},
        {s:70, r:340, v:0.7},
        {s:95, r:405, v:0.53},
        {s:120, r:460, v:0.43},
        {s:150, r:510, v:0.37},
        {s:185, r:580, v:0.31},
        {s:240, r:670, v:0.26},
        {s:300, r:750, v:0.24},
        {s:400, r:830, v:0.21},
        {s:500, r:910, v:0.2},
        {s:630, r:1000, v:0.19},
        {s:800, r:1117, v:0.18},
        {s:1000, r:1254, v:0.17}
      ],
      "Three cables trefoil touching, 3-phase": [
        {s:16, r:135, v:2.57},
        {s:25, r:172, v:1.55},
        {s:35, r:208, v:1.17},
        {s:50, r:235, v:0.86},
        {s:70, r:290, v:0.61},
        {s:95, r:345, v:0.46},
        {s:120, r:390, v:0.37},
        {s:150, r:435, v:0.32},
        {s:185, r:490, v:0.27},
        {s:240, r:560, v:0.23},
        {s:300, r:630, v:0.21},
        {s:400, r:700, v:0.19},
        {s:500, r:770, v:0.18},
        {s:630, r:840, v:0.17},
        {s:800, r:931, v:0.16},
        {s:1000, r:1038, v:0.15}
      ],
      "Two core cable, single-phase (ac)": [
        {s:16, r:140, v:2.9},
        {s:25, r:180, v:1.9},
        {s:35, r:215, v:1.3},
        {s:50, r:255, v:1},
        {s:70, r:315, v:0.7},
        {s:95, r:380, v:0.52},
        {s:120, r:430, v:0.42},
        {s:150, r:480, v:0.35},
        {s:185, r:540, v:0.29},
        {s:240, r:630, v:0.24},
        {s:300, r:700, v:0.21}
      ],
      "Three or four core cable": [
        {s:16, r:115, v:2.6},
        {s:25, r:150, v:1.6},
        {s:35, r:180, v:1.2},
        {s:50, r:215, v:0.87},
        {s:70, r:265, v:0.61},
        {s:95, r:315, v:0.45},
        {s:120, r:360, v:0.36},
        {s:150, r:405, v:0.3},
        {s:185, r:460, v:0.25},
        {s:240, r:530, v:0.21},
        {s:300, r:590, v:0.19}
      ],
    },
    "Cables run in single way ducts": {
      "Two cables: ducts touching": [
        {s:16, r:140, v:3},
        {s:25, r:180, v:2},
        {s:35, r:215, v:1.4},
        {s:50, r:255, v:1.1},
        {s:70, r:310, v:0.8},
        {s:95, r:365, v:0.65},
        {s:120, r:410, v:0.55},
        {s:150, r:445, v:0.5},
        {s:185, r:485, v:0.45},
        {s:240, r:550, v:0.4},
        {s:300, r:610, v:0.37},
        {s:400, r:640, v:0.35},
        {s:500, r:690, v:0.33},
        {s:630, r:750, v:0.3},
        {s:800, r:828, v:0.28},
        {s:1000, r:919, v:0.26}
      ],
      "Three cables: ducts touching, trefoil": [
        {s:16, r:130, v:2.7},
        {s:25, r:170, v:1.8},
        {s:35, r:205, v:1.25},
        {s:50, r:235, v:0.93},
        {s:70, r:280, v:0.7},
        {s:95, r:330, v:0.56},
        {s:120, r:370, v:0.48},
        {s:150, r:405, v:0.43},
        {s:185, r:440, v:0.39},
        {s:240, r:500, v:0.35},
        {s:300, r:550, v:0.32},
        {s:400, r:580, v:0.3},
        {s:500, r:620, v:0.28},
        {s:630, r:670, v:0.26},
        {s:800, r:735, v:0.24},
        {s:1000, r:811, v:0.22}
      ],
      "Two core cable": [
        {s:16, r:115, v:2.9},
        {s:25, r:145, v:1.9},
        {s:35, r:175, v:1.3},
        {s:50, r:210, v:1},
        {s:70, r:260, v:0.7},
        {s:95, r:310, v:0.52},
        {s:120, r:355, v:0.42},
        {s:150, r:400, v:0.35},
        {s:185, r:455, v:0.29},
        {s:240, r:520, v:0.24},
        {s:300, r:590, v:0.21}
      ],
      "Three or four core cable": [
        {s:16, r:94, v:2.6},
        {s:25, r:125, v:1.6},
        {s:35, r:150, v:1.2},
        {s:50, r:175, v:0.87},
        {s:70, r:215, v:0.61},
        {s:95, r:260, v:0.45},
        {s:120, r:300, v:0.36},
        {s:150, r:335, v:0.3},
        {s:185, r:380, v:0.25},
        {s:240, r:440, v:0.21},
        {s:300, r:495, v:0.19}
      ],
    },
  },
  "DVV": {
    "Air (30°C)": {
      "Default": [
        {s:1.5, r:18, v:25},
        {s:2.5, r:25, v:15},
        {s:4, r:33, v:9.5},
        {s:6, r:42, v:6.4},
        {s:10, r:58, v:3.8},
        {s:16, r:77, v:2.4}
      ]
    }
  },
  "DXV": {
    "Air (30°C)": {
      "Default": [
        {s:1.5, r:22, v:27},
        {s:2.5, r:31, v:17},
        {s:4, r:42, v:10},
        {s:6, r:54, v:6.8},
        {s:10, r:74, v:4.1},
        {s:16, r:99, v:2.6}
      ]
    }
  },
  "CV": {
    "Air": {
      "Default": [
        {s:1, r:15, v:38},
        {s:1.5, r:20, v:25},
        {s:2.5, r:27, v:15},
        {s:4, r:37, v:9.5},
        {s:6, r:47, v:6.4},
        {s:10, r:65, v:3},
        {s:16, r:87, v:2.4},
        {s:25, r:114, v:1.55},
        {s:35, r:140, v:1.1},
        {s:50, r:189, v:0.82},
        {s:70, r:215, v:0.57},
        {s:95, r:260, v:0.42},
        {s:120, r:324, v:0.35},
        {s:150, r:384, v:0.29},
        {s:185, r:405, v:0.25},
        {s:240, r:518, v:0.21},
        {s:300, r:570, v:0.19},
        {s:400, r:660, v:0.17},
        {s:500, r:792, v:0.16},
        {s:630, r:904, v:0.15},
        {s:800, r:1030, v:0.15}
      ]
    }
  },
  "AV": {
    "Air": {
      "Default": [
        {s:10, r:52, v:"-"},
        {s:16, r:70, v:3.9},
        {s:25, r:91, v:2.5},
        {s:35, r:112, v:1.8},
        {s:50, r:151, v:1.35},
        {s:70, r:172, v:0.92},
        {s:95, r:208, v:0.67},
        {s:120, r:259, v:0.54},
        {s:150, r:307, v:0.45},
        {s:185, r:324, v:0.37},
        {s:240, r:414, v:0.3},
        {s:300, r:456, v:0.25},
        {s:400, r:528, v:"-"},
        {s:500, r:633, v:"-"},
        {s:630, r:723, v:"-"},
        {s:800, r:824, v:"-"}
      ]
    }
  },
  "VCmd, VCmx": {
    "Air": {
      "Two core": [
        {s:0.5, r:5, v:"-"},
        {s:0.75, r:7, v:"-"},
        {s:1, r:10, v:"-"},
        {s:1.25, r:12, v:"-"},
        {s:1.5, r:14, v:"-"},
        {s:2, r:16, v:"-"},
        {s:2.5, r:18, v:"-"}
      ],
    }
  },
  "VCmt, VCmo, VCmod": {
    "Air": {
      "Two core": [
        {s:0.5, r:7, v:"-"},
        {s:0.75, r:10, v:"-"},
        {s:1, r:11, v:"-"},
        {s:1.25, r:3, v:"-"},
        {s:1.5, r:15, v:"-"},
        {s:2, r:7, v:"-"},
        {s:2.5, r:20, v:"-"},
        {s:3.5, r:24, v:"-"},
        {s:4, r:27, v:"-"},
        {s:5.5, r:32, v:"-"},
        {s:6, r:36, v:"-"}
      ],
    }
  },
  "VC": {
    "Air": {
      "Default": [
        {s:1, r:7, v:"-"},
        {s:1.13, r:19, v:"-"},
        {s:1.5, r:23, v:"-"},
        {s:2, r:27, v:"-"},
        {s:2.5, r:30, v:"-"},
        {s:3, r:35, v:"-"},
        {s:4, r:42, v:"-"},
        {s:5, r:48, v:"-"},
        {s:6, r:51, v:"-"},
        {s:7, r:57, v:"-"}
      ],
    }
  },
  "VA": {
    "Air": {
      "Default": [
        {s:2.5, r:23, v:"-"},
        {s:3, r:26, v:"-"},
        {s:4, r:32, v:"-"},
        {s:5, r:36, v:"-"},
        {s:6, r:39, v:"-"},
        {s:7, r:43, v:"-"}
      ],
    }
  },
  "C": {
    "Air": {
      "Default": [
        {s:4, r:50, v:"-"},
        {s:6, r:70, v:"-"},
        {s:10, r:95, v:"-"},
        {s:14, r:120, v:"-"},
        {s:16, r:130, v:"-"},
        {s:25, r:180, v:"-"},
        {s:35, r:220, v:"-"},
        {s:38, r:230, v:"-"},
        {s:50, r:270, v:"-"},
        {s:60, r:305, v:"-"},
        {s:70, r:340, v:"-"},
        {s:80, r:377, v:"-"},
        {s:95, r:415, v:"-"},
        {s:100, r:450, v:"-"},
        {s:120, r:485, v:"-"},
        {s:125, r:500, v:"-"},
        {s:150, r:570, v:"-"},
        {s:185, r:640, v:"-"},
        {s:240, r:760, v:"-"},
        {s:300, r:880, v:"-"},
        {s:325, r:943, v:"-"},
        {s:400, r:1050, v:"-"},
        {s:500, r:1254, v:"-"},
        {s:630, r:1497, v:"-"},
        {s:800, r:1662, v:"-"}
      ],
    }
  },
  "A, AAC": {
    "Air": {
      "Default": [
        {s:16, r:105, v:"-"},
        {s:25, r:135, v:"-"},
        {s:35, r:170, v:"-"},
        {s:38, r:182, v:"-"},
        {s:50, r:215, v:"-"},
        {s:60, r:225, v:"-"},
        {s:70, r:265, v:"-"},
        {s:80, r:276, v:"-"},
        {s:95, r:320, v:"-"},
        {s:100, r:340, v:"-"},
        {s:120, r:375, v:"-"},
        {s:125, r:390, v:"-"},
        {s:150, r:440, v:"-"},
        {s:185, r:500, v:"-"},
        {s:240, r:590, v:"-"},
        {s:300, r:680, v:"-"},
        {s:325, r:710, v:"-"},
        {s:400, r:815, v:"-"},
        {s:500, r:980, v:"-"},
        {s:630, r:1170, v:"-"},
        {s:800, r:1330, v:"-"}
      ],
    }
  }
};

const metadata_db = {
  "CVV": {
    "Cables installed in air": {
      "Two cables spaced": {desc:"Cáp ruột đồng CVV, cách điện PVC, vỏ PVC không giáp bảo vệ, lắp trên không<br>2 cáp (1 lõi) đặt cách khoảng", img: "CVV_air_1.jpg"},
      "Trefoil touching": {desc: "Cáp ruột đồng CVV, cách điện PVC, vỏ PVC không giáp bảo vệ, lắp trên không<br>3 cáp (1 lõi) tiếp xúc nhau theo hình ba lá", img: "CVV_air_2.jpg"},
      "Laid flat spaced": {desc:"Cáp ruột đồng CVV, cách điện PVC, vỏ PVC không giáp bảo vệ, lắp trên không<br>3 cáp (1 lõi) trên cùng một mặt phẳng và cách khoảng", img:"CVV_air_3.jpg"},
      "Two core": {desc:"Cáp ruột đồng CVV, cách điện PVC, vỏ PVC không giáp bảo vệ, lắp trên không<br>2 lõi", img:"CVV_air_4.jpg"},
      "Three and four core": {desc:"Cáp ruột đồng CVV, cách điện PVC, vỏ PVC không giáp bảo vệ, lắp trên không<br>3 và 4 lõi", img:"CVV_air_5.jpg"}
    },
    "Cables laid direct in ground": {
      "Two cables spaced": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>2 cáp (1 lõi) đặt cách khoảng", img: "CVV_ground_1.jpg"},
      "Trefoil touching": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>3 cáp (1 lõi) tiếp xúc nhau theo hình ba lá", img: "CVV_ground_2.jpg"},
      "Two core": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>2 lõi", img: "CVV_ground_3.jpg"},
      "Three and four core": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>3 và 4 lõi", img: "CVV_ground_4.jpg"}
    },
    "Cables run in single way ducts": {
      "Two cables ducts touching": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, đi trong ống đơn tuyến chôn trong đất<br>2 cáp (1 lõi), ống tiếp xúc nhau", img:"CVV_duct_1.jpg"},
      "Three cables: ducts trefoil touching": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, đi trong ống đơn tuyến chôn trong đất<br>3 cáp (1 lõi), ống xếp theo hình ba lá tiếp xúc nhau", img:"CVV_duct_2.jpg"},
      "Two core": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, đi trong ống đơn tuyến chôn trong đất<br>2 lõi", img:"CVV_duct_3.jpg"},
      "Three and four core": {desc:"Cáp CVV/DTA, CVV/WA ruột đồng, cách điện PVC, vỏ PVC có giáp bảo vệ, đi trong ống đơn tuyến chôn trong đất<br>3 và 4 lõi", img:"CVV_duct_4.jpg"},
    }
},
  "CXV": {
    "Cables installed in air": {
      "2-single core touching": {desc:"Cáp ruột đồng CXV, cách điện XLPE, vỏ PVC không giáp bảo vệ, lắp trên không<br>2 cáp (1 lõi) tiếp xúc", img: "CXV_air_1.jpg"},
      "3-single core touching": {desc:"Cáp ruột đồng CXV, cách điện XLPE, vỏ PVC không giáp bảo vệ, lắp trên không<br>3 cáp (1 lõi) tiếp xúc", img: "CXV_air_2.jpg"},
      "3-single core trefoil": {desc:"Cáp ruột đồng CXV, cách điện XLPE, vỏ PVC không giáp bảo vệ, lắp trên không<br>3 cáp (1 lõi) đặt theo hình 3 lá", img: "CXV_air_3.jpg"},
      "3-single core spaced horizontal": {desc:"Cáp ruột đồng CXV, cách điện XLPE, vỏ PVC không giáp bảo vệ, lắp trên không<br>3 cáp (1 lõi) đặt cách khoảng theo mặt phẳng ngang", img: "CXV_air_4.jpg"},
      "3-single core spaced vertical": {desc:"Cáp ruột đồng CXV, cách điện XLPE, vỏ PVC không giáp bảo vệ, lắp trên không<br>3 cáp (1 lõi) đặt cách khoảng theo mặt phẳng đứng", img: "CXV_air_5.jpg"},
      "2 loaded core": {desc:"Cáp ruột đồng CXV, cách điện XLPE, vỏ PVC không giáp bảo vệ, lắp trên không<br>Cáp 2 lõi", img: "CXV_air_6.jpg"},
      "3 loaded core": {desc:"Cáp ruột đồng CXV, cách điện XLPE, vỏ PVC không giáp bảo vệ, lắp trên không<br>Cáp 3 lõi", img: "CXV_air_7.jpg"}
    },
    "Cables laid direct in ground": {
      "Two cables touching, single-phase (ac)": {desc:"Cáp CXV/DTA, CXV/WA ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>2 cáp (1 lõi, giáp sợi nhôm) đặt tiếp xúc, 1 pha", img: "CXV_ground_1.jpg"},
      "Three cables trefoil touching, 3-phase": {desc:"Cáp CXV/DTA, CXV/WA ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>3 cáp (1 lõi, giáp sợi nhôm) tiếp xúc nhau theo hình 3 lá, 3 pha", img: "CXV_ground_2.jpg"},
      "Two core cable, single-phase (ac)": {desc:"Cáp CXV/DTA, CXV/WA ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>Cáp 2 lõi, giáp sợi thép, 1 pha", img: "CXV_ground_3.jpg"},
      "Three or four core cable":{desc:"Cáp CXV/DTA, CXV/WA ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, chôn trực tiếp trong đất<br>Cáp 3 hay 4 lõi, giáp sợi thép", img: "CXV_ground_4.jpg"}
    },
    "Cables run in single way ducts": {
      "Two cables: ducts touching": {desc:"Cáp ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, đi trong ống chôn trong đất<br>2 cáp (1 lõi, giáp sợi nhôm), ống đặt tiếp xúc", img: "CXV_duct_1.jpg"},
      "Three cables: ducts touching, trefoil": {desc:"Cáp ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, đi trong ống chôn trong đất<br>3 cáp (1 lõi, giáp sợi nhôm), ống đặt tiếp xúc theo hình 3 lá", img: "CXV_duct_2.jpg"},
      "Two core cable": {desc:"Cáp ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, đi trong ống chôn trong đất<br>Cáp 2 lõi, giáp sợi thép", img: "CXV_duct_3.jpg"},
      "Three or four core cable": {desc:"Cáp ruột đồng, cách điện XLPE, vỏ PVC có giáp bảo vệ, đi trong ống chôn trong đất<br>Cáp 3 hay 4 lõi, giáp sợi thép", img: "CXV_duct_4.jpg"}
    }
  },
  "DVV": {
    "Air (30°C)": {
      "Default": {desc:"Cáp điều khiển ruột đồng, cách điện PVC, vỏ PVC<br>Áp dụng tương đương cho cáp điều khiển có màn chắn chống nhiễu (screened control cables)", img: ""}
    }
  },
  "DXV": {
    "Air (30°C)": {
      "Default": {desc:"Cáp điều khiển ruột đồng, cách điện XLPE, vỏ PVC<br>Áp dụng tương đương cho cáp điều khiển có màn chắn chống nhiễu (screened control cables)", img: ""}
    }
  },
  "CV": {
    "Air": {
      "Default": {desc: "Dây điện lực, ruột đồng, cách điện PVC", img:""}
    }
  },
  "AV": {
    "Air": {
      "Default": {desc: "Dây điện lực, ruột nhôm, cách điện PVC", img:""}
    }
  },
  "VCmd, VCmx": {
    "Air": {
      "Two core": {desc: "Dây đôi mềm dẹt (VCmd), mềm xoắn (VCmx), ruột đồng, 2 lõi, cách điện PVC", img:""}
    }
  },
  "VCmt, VCmo, VCmod": {
    "Air": {
      "Two core": {desc: "Dây đôi mềm tròn (VCmt), mềm oval (VCmo), mềm oval dẹt (VCmod), ruột đồng, 2 lõi, cách điện PVC", img:""}
    }
  },
  "VC": {
    "Air": {
      "Default": {desc:"Dây đơn cứng ruột đồng, cách điện PVC", img:""},
    }
  },
  "VA": {
    "Air": {
      "Default": {desc:"Dây đơn cứng ruột nhôm, cách điện PVC", img:""},
    }
  },
  "C": {
    "Air": {
      "Default": {desc:"Dây đồng trần xoắn C", img:""},
    }
  },
  "A, AAC": {
    "Air": {
      "Default": {desc:"Dây nhôm trần xoắn A, AAC<br>Dòng điện định mức ở vùng ôn đới", img:""},
    }
  }
};

// Create Cascading Dropdown
function updateSelect() {
  const cableSel = document.getElementById('cable');
  const installationSel = document.getElementById('installation');
  const arrangementSel = document.getElementById('arrangement');
  const sizeSel = document.getElementById('cable-size');
  const imgElement = document.getElementById('arrangement-img');
  const descSel = document.getElementById('cable-description');
  
  // Dynamically populate 'cable' dropdown menu
  for (let x in database) {
    // Add this new item to the very end of the current list
    cableSel.options[cableSel.options.length] = new Option(x, x);
  }
  
  cableSel.onchange = function() {
    // Empty 'Installation', 'Arrangement', 'cableSize' dropdowns
    installationSel.length = 1;
    arrangementSel.length = 1;
    sizeSel.length = 1;
    
    imgElement.src = "";
    descSel.innerHTML = "";
    // Dynamically populate 'installation' dropdown menu
    for (let x in database[this.value]) {
      installationSel.options[installationSel.options.length] = new Option(x, x);
    }
  }
    
  installationSel.onchange = function() {
    // Empty 'Arrangement', 'cableSize' dropdowns
    arrangementSel.length = 1;
    sizeSel.length = 1;
    
    imgElement.src = "";
    descSel.innerHTML = "";
    // Dynamically populate 'Arrangement' dropdown menu
    for (let x in database[cableSel.value][this.value]) {
      arrangementSel.options[arrangementSel.options.length] = new Option(x, x);
    }
  }
  
  arrangementSel.onchange = function() {
    if(this.value == ""){return;};
    
    // Update illustration and description
    const metadata = metadata_db[cableSel.value][installationSel.value][this.value];
    imgElement.src = `../assets/img/${metadata.img}`;
    descSel.innerHTML = metadata.desc;
    
    // Empty 'cableSize' dropdowns
    sizeSel.length = 1;
    // Dynamically populate 'cableSize' dropdown menu
    const sizeOptions = database[cableSel.value][installationSel.value][this.value];
    for (let i = 0; i < sizeOptions.length; i++) {
      sizeSel.options[sizeSel.options.length] = new Option(sizeOptions[i].s, sizeOptions[i].s);
    }
  }
}

/**
 * Main Calculation Logic
 */
function calculate() {
  const vSource = parseFloat(document.getElementById('v-source').value);
  const pValue = parseFloat(document.getElementById('p-load').value);
  const pUnit = document.getElementById('p-unit').value;
  const pf = parseFloat(document.getElementById('pf').value);
  const eff = parseFloat(document.getElementById('eff').value) / 100;
  const len = parseFloat(document.getElementById('length').value);

  if (!pValue || !len) return alert("Fill in Load and Length");

  // --- UNIT CONVERSION TO AMPS (Ib) ---
  let ib = 0;
  switch (pUnit) {
      case 'w':    ib = pValue / (vSource * pf * eff); break;
      case 'kw':   ib = (pValue * 1000) / (vSource * pf * eff); break;
      case 'hp':   ib = (pValue * 746) / (vSource * pf * eff); break;
      case 'va':   ib = pValue / vSource; break;
      case 'kva':  ib = (pValue * 1000) / vSource; break;
      case 'var':  // Reactive power conversion
          ib = (pValue / (vSource * Math.sin(Math.acos(pf)))) / eff; break; 
      case 'kvar': 
          ib = ((pValue * 1000) / (vSource * Math.sin(Math.acos(pf)))) / eff; break;
  }

  // --- LOOKUP & CALCULATION ---
  const cable_type = document.getElementById('cable').value;
  const installation = document.getElementById('installation').value;
  const arrangement = document.getElementById('arrangement').value;
  const size = parseFloat(document.getElementById('cable-size').value);

  const cable = database[cable_type][installation][arrangement].find(c => c.s === size);

  const vDrop = (cable.v * ib * len) / 1000;
  const vLoad = vSource - vDrop;
  const pc = (vDrop / vSource) * 100;

  // --- RESULTS ---
  document.getElementById('results').style.display = 'block';
  document.getElementById('res-ib').innerText = ib.toFixed(2) + " A";
  document.getElementById('res-iz').innerText = cable.r + " A";
  document.getElementById('res-vload').innerText = vLoad.toFixed(2) + " V";
  
  const statusLabel = pc <= 2.5 ? "Good" : "Bad";
  document.getElementById('res-vdrop').innerText = vDrop.toFixed(2) + " V";
  document.getElementById('res-drop').innerText = `(${pc.toFixed(2)}%)`;
  document.getElementById('res-status').innerText = `(${statusLabel})`;
  document.getElementById('res-status').className = pc <= 2.5 ? "status-good" : "status-bad";
}

/**
 * Resets all fields to their default values
 */
function resetCalculator() {
  // Reset Inputs
  document.getElementById('v-source').value = 230;
  document.getElementById('p-load').value = '';
  document.getElementById('length').value = '';
  document.getElementById('pf').value = 1.0;
  document.getElementById('eff').value = 100;
  document.getElementById('p-unit').value = 'w';
  
  // Hide results
  document.getElementById('results').style.display = 'none';
}

/**
 * Toggles the info tooltip visibility
 */
function toggleInfo() {
  const info = document.getElementById('info-content');
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

// Initialize dropdown on load
window.onload = updateSelect;