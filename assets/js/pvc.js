const productMap = {
  "Nhựa Bình Minh": {
    "Inch": {
      "Ống PVC-U": {
        dim: "PVC-U.jpg",
        eng: "PVC-U Pipe Inch System",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/ong-pvc-u/ong-pvc-u-he-inch/ong-pvc-u-pvc-u-pipe",
        desc: `Loại ống (mm)<br>
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        <b>dn</b>: Đường kính ngoài danh nghĩa<br>
        <b>en</b>: Bề dày danh nghĩa<br>
        <b>l</b>: Chiều dài khớp nối<br>
        <b>Ln</b>: Chiều dài danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN / OD</th><th>Size</th><th>PN</th><th>dn</th><th>en</th><th>l</th><th>Ln</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>mm x mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>m</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>21 x 1.3</td><td>12</td><td>21.3</td><td>1.3</td><td>30</td><td>4, 6</td></tr><tr><td>21</td><td>½</td><td>21 x 1.7</td><td>15</td><td>21.3</td><td>1.7</td><td>30</td><td>4, 6</td></tr><tr><td>27</td><td>¾</td><td>27 x 1.6</td><td>12</td><td>26.7</td><td>1.6</td><td>35</td><td>4, 6</td></tr><tr><td>27</td><td>¾</td><td>27 x 1.9</td><td>15</td><td>26.7</td><td>1.9</td><td>35</td><td>4, 6</td></tr><tr><td>34</td><td>1</td><td>34 x 1.9</td><td>12</td><td>33.5</td><td>1.9</td><td>40</td><td>4, 6</td></tr><tr><td>34</td><td>1</td><td>34 x 2.2</td><td>15</td><td>33.5</td><td>2.2</td><td>40</td><td>4, 6</td></tr><tr><td>42</td><td>1¼</td><td>42 x 1.9</td><td>9</td><td>42.2</td><td>1.9</td><td>44</td><td>4, 6</td></tr><tr><td>42</td><td>1¼</td><td>42 x 2.2</td><td>12</td><td>42.2</td><td>2.2</td><td>44</td><td>4, 6</td></tr><tr><td>49</td><td>1½</td><td>49 x 2.1</td><td>9</td><td>48.2</td><td>2.1</td><td>55</td><td>4, 6</td></tr><tr><td>49</td><td>1½</td><td>49 x 2.5</td><td>12</td><td>48.2</td><td>2.5</td><td>55</td><td>4, 6</td></tr><tr><td>60</td><td>2</td><td>60 x 1.8</td><td>6</td><td>60.2</td><td>1.8</td><td>63</td><td>4, 6</td></tr><tr><td>60</td><td>2</td><td>60 x 2.5</td><td>9</td><td>60.2</td><td>2.5</td><td>63</td><td>4, 6</td></tr><tr><td>90</td><td>3</td><td>90 x 1.7</td><td>3</td><td>88.8</td><td>1.7</td><td>64</td><td>4, 6</td></tr><tr><td>90</td><td>3</td><td>90 x 2.6</td><td>6</td><td>88.8</td><td>2.6</td><td>64</td><td>4, 6</td></tr><tr><td>90</td><td>3</td><td>90 x 3.5</td><td>9</td><td>88.8</td><td>3.5</td><td>64</td><td>4, 6</td></tr><tr><td>114</td><td>4</td><td>114 x 2.2</td><td>3</td><td>114.1</td><td>2.2</td><td>100</td><td>4, 6</td></tr><tr><td>114</td><td>4</td><td>114 x 3.1</td><td>6</td><td>114.1</td><td>3.1</td><td>100</td><td>4, 6</td></tr><tr><td>114</td><td>4</td><td>114 x 4.5</td><td>9</td><td>114.1</td><td>4.5</td><td>100</td><td>4, 6</td></tr><tr><td>168</td><td>6</td><td>168 x 3.2</td><td>3</td><td>168.1</td><td>3.2</td><td>132</td><td>4, 6</td></tr><tr><td>168</td><td>6</td><td>168 x 4.5</td><td>6</td><td>168.1</td><td>4.5</td><td>132</td><td>4, 6</td></tr><tr><td>168</td><td>6</td><td>168 x 6.6</td><td>9</td><td>168.1</td><td>6.6</td><td>132</td><td>4, 6</td></tr><tr><td>220</td><td>8</td><td>220 x 4.2</td><td>3</td><td>218.8</td><td>4.2</td><td>200</td><td>4, 6</td></tr><tr><td>220</td><td>8</td><td>220 x 5.6</td><td>6</td><td>218.8</td><td>5.6</td><td>200</td><td>4, 6</td></tr><tr><td>220</td><td>8</td><td>220 x 8.3</td><td>9</td><td>218.8</td><td>8.3</td><td>200</td><td>4, 6</td></tr></tbody></table>`,
      },
      "Nối trơn": {
        dim: "Plain coupling PVC.jpg",
        eng: "Plain coupling",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/noi-tron-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>L</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>15</td><td>28</td><td>3</td><td>63</td></tr><tr><td>27</td><td>¾</td><td>15</td><td>33</td><td>3</td><td>73</td></tr><tr><td>34</td><td>1</td><td>15</td><td>41</td><td>4</td><td>84</td></tr><tr><td>42</td><td>1¼</td><td>15</td><td>50</td><td>4</td><td>92</td></tr><tr><td>49</td><td>1½</td><td>12</td><td>57</td><td>5</td><td>115</td></tr><tr><td>60</td><td>2</td><td>12</td><td>69</td><td>5</td><td>131</td></tr><tr><td>60</td><td>2</td><td>6</td><td>67</td><td>5</td><td>79</td></tr><tr><td>90</td><td>3</td><td>12</td><td>103</td><td>7</td><td>135</td></tr><tr><td>90</td><td>3</td><td>6</td><td>97</td><td>7</td><td>109</td></tr><tr><td>114</td><td>4</td><td>9</td><td>128</td><td>7</td><td>175</td></tr><tr><td>114</td><td>4</td><td>6</td><td>123</td><td>7</td><td>135</td></tr><tr><td>168</td><td>6</td><td>6</td><td>181</td><td>10</td><td>170</td></tr><tr><td>168</td><td>6</td><td>9</td><td>180</td><td>58</td><td>322</td></tr><tr><td>220</td><td>8</td><td>6</td><td>241</td><td>10</td><td>220</td></tr><tr><td>220</td><td>8</td><td>9</td><td>240</td><td>68</td><td>468</td></tr></tbody></table>`,
      },
      "Nối rút trơn": {
        dim: "Reducing socket PVC.jpg",
        eng: "Reducing socket",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/noi-rut-tron-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>D1</th><th>Z</th><th>L</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>28</td><td>7</td><td>72</td></tr><tr><td>34 x 21</td><td>1 x ½</td><td>15</td><td>41</td><td>28</td><td>7</td><td>77</td></tr><tr><td>34 x 27</td><td>1 x ¾</td><td>15</td><td>41</td><td>33</td><td>7</td><td>82</td></tr><tr><td>42 x 21</td><td>1¼ x ½</td><td>15</td><td>50</td><td>28</td><td>15</td><td>89</td></tr><tr><td>42 x 27</td><td>1¼ x ¾</td><td>15</td><td>50</td><td>33</td><td>12</td><td>91</td></tr><tr><td>42 x 34</td><td>1¼ x 1</td><td>15</td><td>50</td><td>41</td><td>9</td><td>93</td></tr><tr><td>49 x 21</td><td>1½ x ½</td><td>15</td><td>57</td><td>28</td><td>7</td><td>102</td></tr><tr><td>49 x 27</td><td>1½ x ¾</td><td>12</td><td>57</td><td>33</td><td>15</td><td>105</td></tr><tr><td>49 x 34</td><td>1½ x 1</td><td>15</td><td>57</td><td>41</td><td>8</td><td>103</td></tr><tr><td>49 x 42</td><td>1½ x 1¼</td><td>15</td><td>57</td><td>50</td><td>5</td><td>102</td></tr><tr><td>60 x 21</td><td>2 x ½</td><td>15</td><td>69</td><td>28</td><td>24</td><td>117</td></tr><tr><td>60 x 27</td><td>2 x ¾</td><td>15</td><td>69</td><td>33</td><td>21</td><td>119</td></tr><tr><td>60 x 34</td><td>2 x 1</td><td>15</td><td>69</td><td>41</td><td>19</td><td>122</td></tr><tr><td>60 x 42</td><td>2 x 1¼</td><td>12</td><td>69</td><td>50</td><td>13</td><td>120</td></tr><tr><td>60 x 42</td><td>2 x 1¼</td><td>6</td><td>66</td><td>47</td><td>9</td><td>52</td></tr><tr><td>60 x 49</td><td>2 x 1½</td><td>12</td><td>69</td><td>57</td><td>12</td><td>130</td></tr><tr><td>60 x 49</td><td>2 x 1½</td><td>6</td><td>69</td><td>53</td><td>6</td><td>53</td></tr><tr><td>75 x 60</td><td>2½ x 2</td><td>6</td><td>80</td><td>66</td><td>13</td><td>94</td></tr><tr><td>90 x 34</td><td>3 x 1</td><td>9</td><td>97</td><td>41</td><td>32</td><td>112</td></tr><tr><td>90 x 42</td><td>3 x 1¼</td><td>6</td><td>97</td><td>48</td><td>28</td><td>107</td></tr><tr><td>90 x 49</td><td>3 x 1½</td><td>12</td><td>103</td><td>56</td><td>21</td><td>140</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>12</td><td>103</td><td>69</td><td>15</td><td>142</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>6</td><td>97</td><td>67</td><td>21</td><td>109</td></tr><tr><td>90 x 75</td><td>3 x 2½</td><td>6</td><td>96</td><td>80</td><td>14</td><td>109</td></tr><tr><td>90 x 75</td><td>3 x 2½</td><td>10</td><td>100</td><td>85</td><td>15</td><td>123</td></tr><tr><td>114 x 34</td><td>4 x 1</td><td>6</td><td>123</td><td>41</td><td>46</td><td>150</td></tr><tr><td>114 x 49</td><td>4 x 1½</td><td>6</td><td>123</td><td>54</td><td>40</td><td>135</td></tr><tr><td>114 x 60</td><td>4 x 2</td><td>9</td><td>127</td><td>69</td><td>28</td><td>175</td></tr><tr><td>114 x 60</td><td>4 x 2</td><td>6</td><td>123</td><td>67</td><td>34</td><td>135</td></tr><tr><td>114 x 90</td><td>4 x 3</td><td>9</td><td>184</td><td>128</td><td>30</td><td>161</td></tr><tr><td>114 x 90</td><td>4 x 3</td><td>6</td><td>123</td><td>97</td><td>21</td><td>136</td></tr><tr><td>140 x 90</td><td>5 x 3</td><td>6</td><td>153</td><td>123</td><td>23</td><td>163</td></tr><tr><td>168 x 90</td><td>6 x 3</td><td>6</td><td>182</td><td>97</td><td>54</td><td>196</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>9</td><td>185</td><td>128</td><td>43</td><td>259</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>6</td><td>180</td><td>123</td><td>28</td><td>171</td></tr><tr><td>220 x 114</td><td>8 x 4</td><td>6</td><td>236</td><td>124</td><td>58</td><td>213</td></tr><tr><td>220 x 114</td><td>8 x 4</td><td>9</td><td>242</td><td>127</td><td>64</td><td>292</td></tr><tr><td>220 x 140</td><td>8 x 5</td><td>9</td><td>242</td><td>158</td><td>68</td><td>272</td></tr><tr><td>220 x 168</td><td>8 x 6</td><td>6</td><td>235</td><td>180</td><td>26</td><td>363</td></tr></tbody></table>`,
      },
      "Nối ren trong": {
        dim: "Female thread socket PVC.jpg",
        eng: "Female Threaded Socket Plastic thread",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/noi-ren-trong-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th rowspan="2">Thread</th><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>B</th><th>D1</th><th>L1</th><th>L</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>Plastic</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>3</td><td>30</td><td>30</td><td>16</td><td>50</td></tr><tr><td>Plastic</td><td>21 x 27</td><td>½ x ¾</td><td>15</td><td>28</td><td>5</td><td>37</td><td>37</td><td>19</td><td>54</td></tr><tr><td>Plastic</td><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>5</td><td>30</td><td>30</td><td>16</td><td>57</td></tr><tr><td>Plastic</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>33</td><td>5</td><td>37</td><td>37</td><td>19</td><td>57</td></tr><tr><td>Plastic</td><td>34 x 21</td><td>1 x ½</td><td>15</td><td>41</td><td>5</td><td>41</td><td>41</td><td>16</td><td>61</td></tr><tr><td>Plastic</td><td>34 x 27</td><td>1 x ¾</td><td>15</td><td>41</td><td>5</td><td>41</td><td>41</td><td>19</td><td>62</td></tr><tr><td>Plastic</td><td>34 x 34</td><td>1 x 1</td><td>15</td><td>41</td><td>5</td><td>46</td><td>46</td><td>21</td><td>66</td></tr><tr><td>Plastic</td><td>42 x 42</td><td>1¼ x 1¼</td><td>12</td><td>50</td><td>5</td><td>63</td><td>63</td><td>23</td><td>69</td></tr><tr><td>Plastic</td><td>49 x 49</td><td>1½ x 1½</td><td>12</td><td>57</td><td>5</td><td>70</td><td>70</td><td>23</td><td>80</td></tr><tr><td>Plastic</td><td>60 x 60</td><td>2 x 2</td><td>12</td><td>69</td><td>5</td><td>85</td><td>74</td><td>27</td><td>92</td></tr><tr><td>Plastic</td><td>90 x 90</td><td>3 x 3</td><td>12</td><td>103</td><td>5</td><td>113</td><td>105</td><td>35</td><td>105</td></tr><tr><td>Plastic</td><td>114 x 114</td><td>4 x 4</td><td>9</td><td>127</td><td>7</td><td>135</td><td>134</td><td>43</td><td>134</td></tr><tr><td>Brass</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>5</td><td>37</td><td>37</td><td>14</td><td>48</td></tr><tr><td>Brass</td><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>5</td><td>30</td><td>30</td><td>14</td><td>55</td></tr><tr><td>Brass</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>33</td><td>5</td><td>37</td><td>37</td><td>19</td><td>56</td></tr></tbody></table>`,
      },
      "Nối ren ngoài": {
        dim: "Male thread socket PVC.jpg",
        eng: "Male thread socket Plastic thread",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/noi-ren-ngoai-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa (bar)<br>
        `,
        table: `<table><thead><tr><th rowspan="2">Thread</th><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>B</th><th>L1</th><th>L</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>Plastic</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>7</td><td>28</td><td>19</td><td>56</td></tr><tr><td>Plastic</td><td>21 x 27</td><td>½ x ¾</td><td>15</td><td>28</td><td>7</td><td>28</td><td>21</td><td>58</td></tr><tr><td>Plastic</td><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>7</td><td>33</td><td>19</td><td>61</td></tr><tr><td>Plastic</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>33</td><td>7</td><td>33</td><td>21</td><td>63</td></tr><tr><td>Plastic</td><td>27 x 34</td><td>¾ x 1</td><td>15</td><td>33</td><td>5</td><td>38</td><td>22</td><td>59</td></tr><tr><td>Plastic</td><td>27 x 42</td><td>¾ x 1¼</td><td>15</td><td>33</td><td>10</td><td>43</td><td>26</td><td>71</td></tr><tr><td>Plastic</td><td>27 x 49</td><td>¾ x 1½</td><td>15</td><td>33</td><td>10</td><td>49</td><td>27</td><td>72</td></tr><tr><td>Plastic</td><td>34 x 21</td><td>1 x ½</td><td>15</td><td>41</td><td>7</td><td>41</td><td>19</td><td>68</td></tr><tr><td>Plastic</td><td>34 x 27</td><td>1 x ¾</td><td>15</td><td>41</td><td>7</td><td>41</td><td>21</td><td>70</td></tr><tr><td>Plastic</td><td>34 x 34</td><td>1 x 1</td><td>15</td><td>41</td><td>7</td><td>41</td><td>23</td><td>71</td></tr><tr><td>Plastic</td><td>34 x 42</td><td>1 x 1¼</td><td>15</td><td>41</td><td>10</td><td>43</td><td>26</td><td>76</td></tr><tr><td>Plastic</td><td>34 x 49</td><td>1 x 1½</td><td>15</td><td>41</td><td>10</td><td>49</td><td>27</td><td>77</td></tr><tr><td>Plastic</td><td>42 x 42</td><td>1¼ x 1¼</td><td>15</td><td>50</td><td>5</td><td>64</td><td>25</td><td>71</td></tr><tr><td>Plastic</td><td>49 x 49</td><td>1½ x 1½</td><td>12</td><td>57</td><td>5</td><td>64</td><td>26</td><td>83</td></tr><tr><td>Plastic</td><td>60 x 60</td><td>2 x 2</td><td>12</td><td>69</td><td>5</td><td>79</td><td>30</td><td>95</td></tr><tr><td>Plastic</td><td>90 x 90</td><td>3 x 3</td><td>12</td><td>103</td><td>10</td><td>103</td><td>38</td><td>110</td></tr><tr><td>Plastic</td><td>114 x 114</td><td>4 x 4</td><td>9</td><td>127</td><td>10</td><td>133</td><td>46</td><td>135</td></tr><tr><td>Brass</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>15</td><td>28</td><td>14</td><td>46</td></tr><tr><td>Brass</td><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>15</td><td>33</td><td>14</td><td>69</td></tr><tr><td>Brass</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>33</td><td>15</td><td>33</td><td>16</td><td>72</td></tr></tbody></table>`,
      },
      "Bạc chuyển bậc (Nối rút ngắn)": {
        dim: "Reduced bush PVC.jpg",
        eng: "Reduced bush",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/bac-chuyen-bac",
        table: `<table><thead><tr><th colspan="3">DN</th><th>PN</th><th>D</th><th>Z</th><th>L</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>mm x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>60 x 49</td><td>2 x 1 1/2</td><td></td><td>12</td><td>60</td><td>8</td><td>63</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td></td><td>12</td><td>89</td><td>10</td><td>73</td></tr><tr><td>75 x 60*</td><td></td><td>75 x 2</td><td>12.5</td><td>75</td><td>10</td><td>73</td></tr><tr><td>90 x 75*</td><td></td><td>90 x 1 1/2</td><td>12.5</td><td>89</td><td>20</td><td>64</td></tr><tr><td>110 x 60*</td><td></td><td>110 x 2</td><td>12</td><td>110</td><td>25</td><td>88</td></tr></tbody></table>`
      },
      "Khớp nối sống (rắc co)": {
        dim: "Set of barrel union PVC.jpg",
        eng: "Set of barrel union",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/khop-noi-song",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>L</th><th>D1</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>1/2</td><td>15</td><td>28</td><td>72</td><td>49</td></tr><tr><td>27</td><td>3/4</td><td>15</td><td>33</td><td>82</td><td>55</td></tr><tr><td>34</td><td>1</td><td>15</td><td>41</td><td>92</td><td>67</td></tr><tr><td>42</td><td>1 1/4</td><td>12</td><td>50</td><td>102</td><td>73</td></tr><tr><td>49</td><td>1 1/2</td><td>12</td><td>57</td><td>127</td><td>84</td></tr><tr><td>60</td><td>2</td><td>12</td><td>69</td><td>148</td><td>97</td></tr><tr><td>90</td><td>3</td><td>12</td><td>103</td><td>147</td><td>143</td></tr><tr><td>114</td><td>4</td><td>9</td><td>127</td><td>190</td><td>181</td></tr></tbody></table>`
      },
      "Nắp khóa": {
        dim: "End cap PVC.jpg",
        eng: "End cap",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/nap-khoa-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>L</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>1/2</td><td>15</td><td>28</td><td>7</td><td>35</td></tr><tr><td>27</td><td>3/4</td><td>15</td><td>33</td><td>7</td><td>41</td></tr><tr><td>34</td><td>1</td><td>15</td><td>41</td><td>8</td><td>47</td></tr><tr><td>42</td><td>1.25</td><td>15</td><td>50</td><td>8</td><td>52</td></tr><tr><td>49</td><td>1.5</td><td>12</td><td>57</td><td>10</td><td>64</td></tr><tr><td>60</td><td>2</td><td>12</td><td>69</td><td>10</td><td>74</td></tr><tr><td>90</td><td>3</td><td>12</td><td>103</td><td>25</td><td>89</td></tr><tr><td>114</td><td>4</td><td>9</td><td>128</td><td>30</td><td>114</td></tr><tr><td>168</td><td>6</td><td>10</td><td>187</td><td>40</td><td>172</td></tr><tr><td>168</td><td>6</td><td>6</td><td>182</td><td>42</td><td>132</td></tr><tr><td>220</td><td>8</td><td>6</td><td>237</td><td>55</td><td>171</td></tr><tr><td>220</td><td>8</td><td>10</td><td>246</td><td>57</td><td>202</td></tr></tbody></table>`
      },
      "Nắp khóa ren ngoài": {
        dim: "Male thread end cap PVC.jpg",
        eng: "Male thread end cap",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/nap-khoa-ren-ngoai-6",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>B</th><th>L1</th><th>L</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>15</td><td>27</td><td>16</td><td>18</td><td>29</td></tr><tr><td>27</td><td>¾</td><td>15</td><td>33</td><td>20</td><td>20</td><td>30</td></tr><tr><td>34</td><td>1</td><td>15</td><td>40</td><td>30</td><td>22</td><td>35</td></tr></tbody></table>`
      },
      "Nắp khóa ren trong": {
        dim: "Female thread end cap PVC.jpg",
        eng: "Female thread end cap",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/nap-khoa-ren-trong",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>L1</th><th>L</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>15</td><td>31</td><td>8</td><td>16</td><td>24</td></tr><tr><td>27</td><td>¾</td><td>15</td><td>39</td><td>9</td><td>18</td><td>27</td></tr><tr><td>34</td><td>1</td><td>15</td><td>46</td><td>9</td><td>21</td><td>30</td></tr></tbody></table>`
      },
      "Co 90° ba nhánh": {
        dim: "Three-socket 90° Elbow PVC.jpg",
        eng: "Three-socket 90° Elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/co-3-nhanh-90",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>15</td><td>28</td><td>11</td><td>41</td></tr><tr><td>27</td><td>¾</td><td>15</td><td>33</td><td>14</td><td>49</td></tr><tr><td>34</td><td>1</td><td>15</td><td>41</td><td>17</td><td>57</td></tr></tbody></table>`
      },
      "Co 90°": {
        dim: "90° Elbow PVC.jpg",
        eng: "90° Elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/co-90-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>15</td><td>28</td><td>11</td><td>41</td></tr><tr><td>27</td><td>¾</td><td>15</td><td>33</td><td>14</td><td>49</td></tr><tr><td>34</td><td>1</td><td>15</td><td>41</td><td>17</td><td>57</td></tr><tr><td>42</td><td>1¼</td><td>12</td><td>50</td><td>21</td><td>65</td></tr><tr><td>49</td><td>1½</td><td>12</td><td>57</td><td>24</td><td>79</td></tr><tr><td>60</td><td>2</td><td>12</td><td>69</td><td>30</td><td>96</td></tr><tr><td>60</td><td>3</td><td>6</td><td>67</td><td>30</td><td>55</td></tr><tr><td>90</td><td>3</td><td>12</td><td>103</td><td>45</td><td>109</td></tr><tr><td>90</td><td>3</td><td>6</td><td>97</td><td>96</td><td>85</td></tr><tr><td>114</td><td>4</td><td>12</td><td>127</td><td>57</td><td>141</td></tr><tr><td>114</td><td>4</td><td>6</td><td>123</td><td>57</td><td>107</td></tr><tr><td>168</td><td>6</td><td>6</td><td>181</td><td>84</td><td>164</td></tr><tr><td>220</td><td>8</td><td>12</td><td>253</td><td>225</td><td>365</td></tr><tr><td>220</td><td>8</td><td>9</td><td>245</td><td>113</td><td>230</td></tr></tbody></table>`
      },
      "Co 90° rút": {
        dim: "90° Reducing Elbow PVC.jpg",
        eng: "90° Reducing Elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/co-90-rut-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>14</td><td>49</td><td>28</td><td>11</td><td>41</td></tr><tr><td>34 x 21</td><td>1 x ½</td><td>15</td><td>41</td><td>17</td><td>57</td><td>28</td><td>11</td><td>41</td></tr><tr><td>34 x 27</td><td>1 x ¾</td><td>15</td><td>41</td><td>17</td><td>57</td><td>33</td><td>14</td><td>49</td></tr><tr><td>42 x 27</td><td>1¼ x ¾</td><td>12</td><td>50</td><td>21</td><td>65</td><td>33</td><td>14</td><td>49</td></tr><tr><td>42 x 34</td><td>1¼ x 1</td><td>12</td><td>50</td><td>21</td><td>65</td><td>41</td><td>17</td><td>57</td></tr><tr><td>49 x 27</td><td>1½ x ¾</td><td>12</td><td>57</td><td>28</td><td>83</td><td>33</td><td>16</td><td>51</td></tr><tr><td>49 x 34</td><td>1½ x 1</td><td>12</td><td>57</td><td>28</td><td>83</td><td>41</td><td>20</td><td>60</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>12</td><td>103</td><td>45</td><td>109</td><td>69</td><td>69</td><td>93</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>6</td><td>97</td><td>45</td><td>85</td><td>67</td><td>55</td><td>55</td></tr><tr><td>90 x 75</td><td>3 x 2½</td><td>6</td><td>97</td><td>49</td><td>100</td><td>80</td><td>42</td><td>86</td></tr><tr><td>114 x 60</td><td>4 x 2</td><td>6</td><td>123</td><td>63</td><td>113</td><td>67</td><td>38</td><td>63</td></tr><tr><td>114 x 90</td><td>4 x 3</td><td>6</td><td>123</td><td>63</td><td>113</td><td>97</td><td>54</td><td>94</td></tr></tbody></table>`
      },
      "Co 90° âm dương": {
        dim: "Male - Female 90° Elbow PVC.jpg",
        eng: "Male - Female 90° Elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/co-am-duong",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>90</td><td>3</td><td>6</td><td>97</td><td>45</td><td>85</td><td>89</td><td>51</td><td>115</td></tr><tr><td>114</td><td>4</td><td>6</td><td>123</td><td>58</td><td>108</td><td>114</td><td>65</td><td>165</td></tr></tbody></table>`
      },
      "Co 90° ren trong": {
        dim: "Female thread 90° elbow PVC.jpg",
        eng: "Female thread 90° elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/co-ren-trong",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th rowspan="2">Thread</th><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>B</th><th>D1</th><th>L1</th><th>Z1</th><th>H1</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>Plastic</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>11</td><td>41</td><td>34</td><td>30</td><td>16</td><td>11</td><td>50</td></tr><tr><td>Plastic</td><td>21 x 27</td><td>½ x ¾</td><td>15</td><td>33</td><td>14</td><td>44</td><td>37</td><td>37</td><td>19</td><td>13</td><td>54</td></tr><tr><td>Brass</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>11</td><td>41</td><td>34</td><td>30</td><td>16</td><td>11</td><td>27</td></tr><tr><td>Brass</td><td>21 x 27</td><td>½ x ¾</td><td>15</td><td>28</td><td>11</td><td>41</td><td>42</td><td>37</td><td>18</td><td>14</td><td>32</td></tr><tr><td>Brass</td><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>14</td><td>49</td><td>34</td><td>30</td><td>16</td><td>11</td><td>27</td></tr><tr><td>Brass</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>33</td><td>14</td><td>49</td><td>42</td><td>37</td><td>18</td><td>14</td><td>32</td></tr><tr><td>Brass</td><td>34 x 21</td><td>1 x ½</td><td>15</td><td>41</td><td>19</td><td>59</td><td>34</td><td>30</td><td>16</td><td>11</td><td>30</td></tr><tr><td>Brass</td><td>34 x 27</td><td>1 x ¾</td><td>15</td><td>41</td><td>14</td><td>66</td><td>51</td><td>46</td><td>18</td><td>14</td><td>40</td></tr></tbody></table>`
      },
      "Co 90° ren ngoài": {
        dim: "Male thread 90° elbow.jpg",
        eng: "Male thread 90° elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/co-ren-ngoai",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th rowspan="2">Thread</th><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>B</th><th>L1</th><th>Z1</th><th>H1</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>Plastic</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>15</td><td>45</td><td>24</td><td>18</td><td>24</td><td>42</td></tr><tr><td>Plastic</td><td>21 x 27</td><td>½ x ¾</td><td>15</td><td>28</td><td>14</td><td>44</td><td>31</td><td>20</td><td>32</td><td>52</td></tr><tr><td>Plastic</td><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>14</td><td>49</td><td>38</td><td>18</td><td>27</td><td>45</td></tr><tr><td>Plastic</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>33</td><td>18</td><td>53</td><td>30</td><td>20</td><td>29</td><td>49</td></tr><tr><td>Plastic</td><td>27 x 34</td><td>¾ x 1</td><td>15</td><td>33</td><td>15</td><td>50</td><td>38</td><td>23</td><td>34</td><td>57</td></tr><tr><td>Plastic</td><td>34 x 21</td><td>1 x ½</td><td>15</td><td>41</td><td>18</td><td>58</td><td>29</td><td>18</td><td>32</td><td>50</td></tr><tr><td>Plastic</td><td>34 x 27</td><td>1 x ¾</td><td>15</td><td>41</td><td>20</td><td>60</td><td>34</td><td>20</td><td>34</td><td>54</td></tr><tr><td>Plastic</td><td>34 x 34</td><td>1 x 1</td><td>15</td><td>41</td><td>21</td><td>60</td><td>38</td><td>23</td><td>32</td><td>55</td></tr><tr><td>Brass</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>11</td><td>41</td><td>34</td><td>14</td><td>27</td><td>41</td></tr><tr><td>Brass</td><td>21 x 27</td><td>½ x ¾</td><td>15</td><td>28</td><td>14</td><td>49</td><td>43</td><td>16</td><td>32</td><td>47</td></tr><tr><td>Brass</td><td>27 x 27</td><td>¾ x ¾</td><td>12</td><td>33</td><td>18</td><td>53</td><td>43</td><td>16</td><td>32</td><td>49</td></tr></tbody></table>`
      },
      "Co 45°": {
        dim: "45° Elbow PVC.jpg",
        eng: "45° Elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/co-45-23",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>15</td><td>28</td><td>5</td><td>35</td></tr><tr><td>27</td><td>¾</td><td>15</td><td>33</td><td>6</td><td>41</td></tr><tr><td>34</td><td>1</td><td>15</td><td>41</td><td>7</td><td>47</td></tr><tr><td>42</td><td>1¼</td><td>15</td><td>50</td><td>9</td><td>53</td></tr><tr><td>49</td><td>1½</td><td>12</td><td>57</td><td>10</td><td>65</td></tr><tr><td>60</td><td>2</td><td>12</td><td>69</td><td>13</td><td>76</td></tr><tr><td>60</td><td>2</td><td>6</td><td>67</td><td>13</td><td>38</td></tr><tr><td>90</td><td>3</td><td>12</td><td>103</td><td>19</td><td>83</td></tr><tr><td>90</td><td>3</td><td>6</td><td>97</td><td>19</td><td>59</td></tr><tr><td>114</td><td>4</td><td>9</td><td>127</td><td>24</td><td>108</td></tr><tr><td>114</td><td>4</td><td>6</td><td>123</td><td>24</td><td>74</td></tr><tr><td>168</td><td>6</td><td>9</td><td>187</td><td>46</td><td>178</td></tr><tr><td>168</td><td>6</td><td>6</td><td>181</td><td>40</td><td>131</td></tr><tr><td>220</td><td>8</td><td>10</td><td>241</td><td>59</td><td>204</td></tr><tr><td>220</td><td>8</td><td>6</td><td>238</td><td>52</td><td>168</td></tr><tr><td>168</td><td>6</td><td>6</td><td>180</td><td>35</td><td>115</td></tr><tr><td>220</td><td>8</td><td>6</td><td>123</td><td>46</td><td>151</td></tr></tbody></table>`,
      },
      "Chữ Y - T 45°": {
        dim: "Y - T 45° PVC.jpg",
        eng: "Y - T 45°",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/chu-y-t-45",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>Z1</th><th>H1</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>34</td><td>1</td><td>12</td><td>41</td><td>7</td><td>47</td><td>40</td><td>80</td></tr><tr><td>42</td><td>1¼</td><td>6</td><td>48</td><td>9</td><td>27</td><td>51</td><td>69</td></tr><tr><td>49</td><td>1½</td><td>6</td><td>57</td><td>15</td><td>70</td><td>65</td><td>120</td></tr><tr><td>60</td><td>2</td><td>12</td><td>69</td><td>19</td><td>82</td><td>80</td><td>143</td></tr><tr><td>60</td><td>2</td><td>4</td><td>67</td><td>19</td><td>56</td><td>79</td><td>116</td></tr><tr><td>90</td><td>3</td><td>3</td><td>97</td><td>29</td><td>80</td><td>139</td><td>190</td></tr><tr><td>114</td><td>4</td><td>6</td><td>123</td><td>35</td><td>99</td><td>159</td><td>223</td></tr><tr><td>168</td><td>6</td><td>4</td><td>181</td><td>50</td><td>130</td><td>230</td><td>310</td></tr></tbody></table>`,
      },
      "Chữ Y rút - T 45°": {
        dim: "Reducing Y - T 45° PVC.jpg",
        eng: "BReducing Y - T 45°lank",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/chu-y-rut-t-45",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>Z1</th><th>H1</th><th>H1</th><th>Z2</th><th>H2</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>60 x 42</td><td>2 x 1¼</td><td>4</td><td>69</td><td>0</td><td>25</td><td>48</td><td>64</td><td>82</td><td>60</td><td>85</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>6</td><td>97</td><td>-2</td><td>38</td><td>67</td><td>93</td><td>118</td><td>87</td><td>127</td></tr><tr><td>90 x 75</td><td>3 x 2½</td><td>6</td><td>96</td><td>17</td><td>68</td><td>81</td><td>130</td><td>174</td><td>127</td><td>178</td></tr><tr><td>114 x 60</td><td>4 x 2</td><td>6</td><td>123</td><td>-15</td><td>35</td><td>67</td><td>111</td><td>136</td><td>100</td><td>150</td></tr><tr><td>114 x 90</td><td>4 x 3</td><td>6</td><td>123</td><td>5</td><td>55</td><td>97</td><td>125</td><td>165</td><td>120</td><td>170</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>6</td><td>181</td><td>18</td><td>109</td><td>123</td><td>221</td><td>285</td><td>210</td><td>302</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>10</td><td>188</td><td>18</td><td>150</td><td>127</td><td>225</td><td>308</td><td>213</td><td>345</td></tr><tr><td>168 x 140</td><td>6 x 5</td><td>6</td><td>183</td><td>37</td><td>128</td><td>153</td><td>225</td><td>301</td><td>221</td><td>312</td></tr><tr><td>220 x 140</td><td>8 x 5</td><td>6</td><td>237</td><td>20</td><td>136</td><td>153</td><td>271</td><td>347</td><td>258</td><td>374</td></tr></tbody></table>`,
      },
      "Chữ T cong": {
        dim: "90° turn lateral tee PVC.jpg",
        eng: "90° turn lateral tee",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/t-cong",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th><th>Z2</th><th>H2</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>60 x 60</td><td>2 x 2</td><td>6</td><td>67</td><td>34</td><td>71</td><td>67</td><td>45</td><td>82</td><td>50</td><td>87</td></tr><tr><td>90 x 90</td><td>3 x 3</td><td>6</td><td>97</td><td>48</td><td>99</td><td>97</td><td>64</td><td>115</td><td>74</td><td>125</td></tr><tr><td>114 x 114</td><td>4 x 4</td><td>6</td><td>123</td><td>61</td><td>125</td><td>123</td><td>81</td><td>145</td><td>95</td><td>159</td></tr><tr><td>168 x 168</td><td>6 x 6</td><td>6</td><td>181</td><td>89</td><td>180</td><td>181</td><td>116</td><td>207</td><td>126</td><td>217</td></tr><tr><td>168 x 168</td><td>6 x 6</td><td>10</td><td>188</td><td>96</td><td>228</td><td>188</td><td>122</td><td>254</td><td>147</td><td>279</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>6</td><td>97</td><td>44</td><td>80</td><td>67</td><td>50</td><td>90</td><td>65</td><td>90</td></tr><tr><td>114 x 90</td><td>4 x 3</td><td>6</td><td>123</td><td>49</td><td>113</td><td>97</td><td>64</td><td>128</td><td>88</td><td>139</td></tr><tr><td>140 x 90</td><td>5 x 3</td><td>10</td><td>162</td><td>55</td><td>131</td><td>103</td><td>72</td><td>148</td><td>112</td><td>176</td></tr><tr><td>140 x 90</td><td>5 x 3</td><td>6</td><td>153</td><td>51</td><td>127</td><td>97</td><td>63</td><td>139</td><td>103</td><td>154</td></tr><tr><td>140 x 114</td><td>5 x 4</td><td>10</td><td>162</td><td>68</td><td>144</td><td>127</td><td>92</td><td>168</td><td>119</td><td>203</td></tr><tr><td>140 x 114</td><td>5 x 4</td><td>6</td><td>153</td><td>62</td><td>138</td><td>123</td><td>73</td><td>155</td><td>110</td><td>174</td></tr><tr><td>168 x 90</td><td>6 x 3</td><td>6</td><td>181</td><td>64</td><td>155</td><td>97</td><td>64</td><td>155</td><td>104</td><td>155</td></tr><tr><td>168 x 90</td><td>6 x 3</td><td>10</td><td>188</td><td>56</td><td>188</td><td>103</td><td>71</td><td>203</td><td>131</td><td>195</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>6</td><td>181</td><td>79</td><td>170</td><td>123</td><td>84</td><td>175</td><td>116</td><td>180</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>10</td><td>188</td><td>68</td><td>200</td><td>127</td><td>90</td><td>222</td><td>139</td><td>223</td></tr><tr><td>168 x 140</td><td>6 x 5</td><td>6</td><td>182</td><td>74</td><td>165</td><td>153</td><td>105</td><td>196</td><td>140</td><td>216</td></tr></tbody></table>`,
      },
      "Chữ T cong âm dương": {
        dim: "Male-Female 90° turn lateral tee PVC.jpg",
        eng: "Male-Female 90° turn lateral tee",
        ref: "https://binhminhplastic.com.vn/en-US/product/pvc-u-1/pvc-u-fittings/pvc-u-inch-series-fittings/t-cong-am-duong-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>Z1</th><th>H1</th><th>H1</th><th>Z2</th><th>H2</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>90</td><td>3</td><td>3</td><td>97</td><td>41</td><td>81</td><td>89</td><td>48</td><td>112</td><td>113</td><td>114</td></tr></tbody></table>`,
      },
      "Chữ T": {
        dim: "Tee PVC.jpg",
        eng: "Tee",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/chu-t-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>15</td><td>28</td><td>13</td><td>43</td></tr><tr><td>27</td><td>¾</td><td>15</td><td>33</td><td>16</td><td>52</td></tr><tr><td>34</td><td>1</td><td>15</td><td>41</td><td>20</td><td>60</td></tr><tr><td>42</td><td>1¼</td><td>15</td><td>50</td><td>21</td><td>66</td></tr><tr><td>49</td><td>1½</td><td>12</td><td>57</td><td>28</td><td>83</td></tr><tr><td>60</td><td>2</td><td>12</td><td>69</td><td>36</td><td>76</td></tr><tr><td>60</td><td>2</td><td>6</td><td>67</td><td>36</td><td>73</td></tr><tr><td>90</td><td>3</td><td>12</td><td>103</td><td>52</td><td>116</td></tr><tr><td>90</td><td>3</td><td>6</td><td>97</td><td>52</td><td>103</td></tr><tr><td>114</td><td>4</td><td>9</td><td>127</td><td>68</td><td>152</td></tr><tr><td>114</td><td>4</td><td>6</td><td>123</td><td>68</td><td>132</td></tr><tr><td>168</td><td>6</td><td>9</td><td>212</td><td>90</td><td>222</td></tr><tr><td>168</td><td>6</td><td>6</td><td>181</td><td>92</td><td>183</td></tr><tr><td>220</td><td>8</td><td>9</td><td>255</td><td>116</td><td>265</td></tr><tr><td>220</td><td>8</td><td>6</td><td>248</td><td>106</td><td>236</td></tr></tbody></table>`,
      },
      "Chữ T rút": {
        dim: "Reducing T PVC.jpg",
        eng: "Reducing T",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/chu-t-rut-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>13</td><td>48</td><td>28</td><td>16</td><td>46</td></tr><tr><td>34 x 21</td><td>1 x ½</td><td>15</td><td>41</td><td>13</td><td>53</td><td>28</td><td>19</td><td>50</td></tr><tr><td>34 x 27</td><td>1 x ¾</td><td>15</td><td>41</td><td>16</td><td>54</td><td>33</td><td>19</td><td>54</td></tr><tr><td>42 x 21</td><td>1¼ x ½</td><td>15</td><td>50</td><td>13</td><td>55</td><td>28</td><td>22</td><td>53</td></tr><tr><td>42 x 27</td><td>1¼ x ¾</td><td>15</td><td>50</td><td>17</td><td>58</td><td>33</td><td>22</td><td>60</td></tr><tr><td>42 x 34</td><td>1¼ x 1</td><td>15</td><td>50</td><td>20</td><td>61</td><td>41</td><td>24</td><td>64</td></tr><tr><td>49 x 21</td><td>1½ x ½</td><td>15</td><td>57</td><td>13</td><td>66</td><td>28</td><td>24</td><td>57</td></tr><tr><td>49 x 27</td><td>1½ x ¾</td><td>15</td><td>57</td><td>17</td><td>69</td><td>33</td><td>24</td><td>63</td></tr><tr><td>49 x 34</td><td>1½ x 1</td><td>15</td><td>57</td><td>20</td><td>72</td><td>41</td><td>24</td><td>68</td></tr><tr><td>49 x 42</td><td>1½ x 1¼</td><td>12</td><td>57</td><td>24</td><td>76</td><td>50</td><td>24</td><td>72</td></tr><tr><td>60 x 21</td><td>2 x ½</td><td>15</td><td>69</td><td>17</td><td>77</td><td>28</td><td>32</td><td>66</td></tr><tr><td>60 x 27</td><td>2 x ¾</td><td>15</td><td>69</td><td>17</td><td>77</td><td>33</td><td>32</td><td>68</td></tr><tr><td>60 x 34</td><td>2 x 1</td><td>12</td><td>69</td><td>20</td><td>80</td><td>41</td><td>32</td><td>73</td></tr><tr><td>60 x 42</td><td>2 x 1¼</td><td>12</td><td>69</td><td>24</td><td>84</td><td>50</td><td>33</td><td>78</td></tr><tr><td>60 x 49</td><td>2 x 1½</td><td>12</td><td>69</td><td>27</td><td>87</td><td>57</td><td>32</td><td>88</td></tr><tr><td>90 x 27</td><td>3 x ¾</td><td>12</td><td>103</td><td>61</td><td>92</td><td>33</td><td>52</td><td>92</td></tr><tr><td>90 x 34</td><td>3 x 1</td><td>12</td><td>103</td><td>34</td><td>95</td><td>41</td><td>52</td><td>90</td></tr><tr><td>90 x 42</td><td>3 x 1¼</td><td>6</td><td>97</td><td>30</td><td>80</td><td>47</td><td>52</td><td>80</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>12</td><td>103</td><td>33</td><td>95</td><td>69</td><td>52</td><td>108</td></tr><tr><td>90 x 60</td><td>3 x 2</td><td>6</td><td>97</td><td>47</td><td>89</td><td>67</td><td>52</td><td>89</td></tr><tr><td>114 x 60</td><td>4 x 2</td><td>9</td><td>127</td><td>33</td><td>114</td><td>69</td><td>59</td><td>120</td></tr><tr><td>114 x 60</td><td>4 x 2</td><td>6</td><td>123</td><td>35</td><td>80</td><td>67</td><td>59</td><td>82</td></tr><tr><td>114 x 90</td><td>4 x 3</td><td>9</td><td>127</td><td>48</td><td>129</td><td>103</td><td>60</td><td>135</td></tr><tr><td>114 x 90</td><td>4 x 3</td><td>6</td><td>123</td><td>55</td><td>119</td><td>97</td><td>60</td><td>121</td></tr><tr><td>140 x 90</td><td>5 x 3</td><td>6</td><td>153</td><td>55</td><td>119</td><td>97</td><td>68</td><td>119</td></tr><tr><td>140 x 114</td><td>5 x 4</td><td>10</td><td>162</td><td>71</td><td>147</td><td>127</td><td>81</td><td>165</td></tr><tr><td>140 x 114</td><td>5 x 4</td><td>6</td><td>153</td><td>63</td><td>139</td><td>123</td><td>76</td><td>140</td></tr><tr><td>168 x 90</td><td>6 x 3</td><td>9</td><td>188</td><td>63</td><td>190</td><td>103</td><td>94</td><td>155</td></tr><tr><td>168 x 90</td><td>6 x 3</td><td>6</td><td>181</td><td>63</td><td>148</td><td>97</td><td>96</td><td>147</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>10</td><td>188</td><td>71</td><td>203</td><td>127</td><td>96</td><td>180</td></tr><tr><td>168 x 114</td><td>6 x 4</td><td>6</td><td>181</td><td>68</td><td>178</td><td>123</td><td>96</td><td>160</td></tr><tr><td>220 x 114</td><td>8 x 4</td><td>6</td><td>237</td><td>68</td><td>185</td><td>123</td><td>110</td><td>182</td></tr><tr><td>220 x 168</td><td>8 x 6</td><td>6</td><td>237</td><td>94</td><td>211</td><td>181</td><td>110</td><td>212</td></tr></tbody></table>`,
      },
      "Chữ T ren trong": {
        dim: "Threaded female T PVC.png",
        eng: "Threaded female T",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/t-ren-trong-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th rowspan="2">Thread</th><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>L1</th><th>Z1</th><th>H1</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>Plastic</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>12</td><td>42</td><td>34</td><td>17</td><td>14</td><td>31</td></tr><tr><td>Plastic</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>28</td><td>14</td><td>49</td><td>42</td><td>19</td><td>12</td><td>37</td></tr><tr><td>Brass</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>15</td><td>45</td><td>34</td><td>15</td><td>14</td><td>29</td></tr><tr><td>Brass</td><td>21 x 27</td><td>½ x ¾</td><td>15</td><td>28</td><td>19</td><td>49</td><td>42</td><td>17</td><td>14</td><td>31</td></tr><tr><td>Brass</td><td>27 x 27</td><td>¾ x ¾</td><td>15</td><td>33</td><td>16</td><td>51</td><td>42</td><td>17</td><td>12</td><td>39</td></tr><tr><td>Brass</td><td>34 x 34</td><td>1 x 1</td><td>15</td><td>41</td><td>19</td><td>59</td><td>52</td><td>22</td><td>18</td><td>40</td></tr></tbody></table>`,
      },
      "Chữ T ren ngoài": {
        dim: "Threaded male T PVC.jpg",
        eng: "Threaded male T",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/t-ren-ngoai",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th rowspan="2">Thread</th><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>L1</th><th>Z1</th><th>H1</th></tr><tr><th>mm x mm</th><th>inch x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>Plastic</td><td>27 x 21</td><td>¾ x ½</td><td>15</td><td>33</td><td>9</td><td>47</td><td>24</td><td>18</td><td>28</td><td>46</td></tr><tr><td>Brass</td><td>21 x 21</td><td>½ x ½</td><td>15</td><td>28</td><td>16</td><td>46</td><td>34</td><td>14</td><td>30</td><td>44</td></tr><tr><td>Brass</td><td>27 x 27</td><td>¾ x ¾</td><td>12</td><td>33</td><td>16</td><td>51</td><td>42</td><td>16</td><td>35</td><td>51</td></tr></tbody></table>`,
      },
      "Tứ thông": {
        dim: "Four-way fitting PVC.jpg",
        eng: "Four-way fitting",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/tu-thong",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>Z1</th><th>H1</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>90</td><td>3</td><td>6</td><td>97</td><td>45</td><td>57</td><td>68</td><td>108</td></tr><tr><td>114</td><td>4</td><td>3</td><td>123</td><td>57</td><td>107</td><td>86</td><td>136</td></tr></tbody></table>`,
      },
      "Van cầu": {
        dim: "Ball valve PVC.jpg",
        eng: "Ball valve",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/van",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>H1</th><th>H2</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>21</td><td>½</td><td>12</td><td>28</td><td>19</td><td>49</td><td>65</td><td>21</td></tr><tr><td>27</td><td>¾</td><td>12</td><td>34</td><td>21</td><td>56</td><td>75</td><td>25</td></tr><tr><td>34</td><td>1</td><td>12</td><td>42</td><td>24</td><td>64</td><td>90</td><td>28</td></tr><tr><td>42</td><td>1¼</td><td>12</td><td>52</td><td>28</td><td>72</td><td>105</td><td>37</td></tr><tr><td>49</td><td>1½</td><td>12</td><td>58</td><td>33</td><td>88</td><td>115</td><td>43</td></tr></tbody></table>`,
      },
      "Khởi thủy dán": {
        dim: "Solvent Weld Saddle PVC.jpg",
        eng: "Solvent Weld Saddle",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-inch/khoi-thuy-dan",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th colspan="2">DN</th><th>PN</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th><th>H2</th></tr><tr><th>mm</th><th>inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>90 x 49</td><td>3 x 1½</td><td>6</td><td>12</td><td>48</td><td>53</td><td>68</td><td>90</td><td>74</td></tr><tr><td>114 x 60</td><td>4 x 2</td><td>6</td><td>15</td><td>61</td><td>66</td><td>86</td><td>126</td><td>135</td></tr></tbody></table>`,
      },
    },
    "Metric":{
      "Ống PVC-U": {
        dim: "PVC-U.jpg",
        eng: "Metric PVC-U Pipe",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/ong-pvc-u/ong-pvc-u-he-met/ong-pvc-u-he-met-1",
        desc: `
        <b>dn</b>: Đường kính ngoài danh nghĩa<br>
        <b>l</b>: Chiều dài khớp nối dán keo<br>
        <b>Lb</b>: Chiều dài khớp nối gioăng cao su<br>
        <b>Ln</b>: Chiều dài danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN / OD</th><th>dn</th><th>l</th><th>Lb</th><th>Ln</th></tr><tr><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>m</th></tr></thead><tbody><tr><td>20</td><td>20.0</td><td>20</td><td>-</td><td>4, 6</td></tr><tr><td>25</td><td>25.0</td><td>25</td><td>-</td><td>4, 6</td></tr><tr><td>32</td><td>32.0</td><td>30</td><td>-</td><td>4, 6</td></tr><tr><td>40</td><td>40.0</td><td>35</td><td>-</td><td>4, 6</td></tr><tr><td>50</td><td>50.0</td><td>41</td><td>-</td><td>4, 6</td></tr><tr><td>63</td><td>63.0</td><td>50</td><td>103</td><td>4, 6</td></tr><tr><td>75</td><td>75.0</td><td>60</td><td>105</td><td>4, 6</td></tr><tr><td>90</td><td>90.0</td><td>72</td><td>115</td><td>4, 6</td></tr><tr><td>110</td><td>110.0</td><td>88</td><td>118</td><td>4, 6</td></tr><tr><td>125</td><td>125.0</td><td>100</td><td>128</td><td>4, 6</td></tr><tr><td>140</td><td>140.0</td><td>112</td><td>128</td><td>4, 6</td></tr><tr><td>160</td><td>160.0</td><td>128</td><td>137</td><td>4, 6</td></tr><tr><td>180</td><td>180.0</td><td>144</td><td>146</td><td>4, 6</td></tr><tr><td>200</td><td>200.0</td><td>160</td><td>147</td><td>4, 6</td></tr><tr><td>225</td><td>225.0</td><td>180</td><td>158</td><td>4, 6</td></tr><tr><td>250</td><td>250.0</td><td>200</td><td>165</td><td>4, 6</td></tr><tr><td>280</td><td>280.0</td><td>224</td><td>172</td><td>4, 6</td></tr><tr><td>315</td><td>315.0</td><td>252</td><td>193</td><td>4, 6</td></tr><tr><td>355</td><td>355.0</td><td>284</td><td>206</td><td>4, 6</td></tr><tr><td>400</td><td>400.0</td><td>320</td><td>218</td><td>4, 6</td></tr><tr><td>450</td><td>450.0</td><td>-</td><td>235</td><td>4, 6</td></tr><tr><td>500</td><td>500.0</td><td>-</td><td>255</td><td>4, 6</td></tr><tr><td>560</td><td>560.0</td><td>-</td><td>273</td><td>4, 6</td></tr><tr><td>630</td><td>630.0</td><td>-</td><td>295</td><td>4, 6</td></tr></tbody></table>`,
      },
      "Nối trơn": {
        dim: "Plain coupling PVC.jpg",
        eng: "Plain coupling",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/noi-tron-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN </th><th>PN</th><th>D</th><th>Z</th><th>L</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20</td><td>16</td><td>25</td><td>2</td><td>34</td></tr><tr><td>25</td><td>16</td><td>32</td><td>2</td><td>40</td></tr><tr><td>32</td><td>16</td><td>41</td><td>2</td><td>46</td></tr><tr><td>40</td><td>16</td><td>51</td><td>2</td><td>54</td></tr><tr><td>50</td><td>12.5</td><td>60</td><td>2</td><td>64</td></tr><tr><td>63</td><td>12.5</td><td>76</td><td>2</td><td>78</td></tr><tr><td>63</td><td>6</td><td>69</td><td>2</td><td>78</td></tr><tr><td>75</td><td>12.5</td><td>88</td><td>3</td><td>91</td></tr><tr><td>75</td><td>6</td><td>79</td><td>3</td><td>91</td></tr><tr><td>90</td><td>12.5</td><td>106</td><td>4</td><td>106</td></tr><tr><td>90</td><td>6</td><td>95</td><td>4</td><td>106</td></tr><tr><td>110</td><td>12.5</td><td>130</td><td>5</td><td>127</td></tr><tr><td>110</td><td>6</td><td>117</td><td>5</td><td>127</td></tr><tr><td>140</td><td>6</td><td>152</td><td>10</td><td>162</td></tr><tr><td>140</td><td>10</td><td>161</td><td>8</td><td>160</td></tr><tr><td>160</td><td>10</td><td>175</td><td>18</td><td>181</td></tr><tr><td>200</td><td>10</td><td>219</td><td>48</td><td>412</td></tr><tr><td>225</td><td>10</td><td>246</td><td>50</td><td>450</td></tr><tr><td>250</td><td>10</td><td>273</td><td>52</td><td>552</td></tr><tr><td>315</td><td>10</td><td>345</td><td>54</td><td>654</td></tr></tbody></table>`,
      },
      "Nối rút trơn": {
        dim: "Reducing socket PVC.jpg",
        eng: "Reducing socket",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/noi-rut-tron",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN </th><th>PN</th><th>D</th><th>D1</th><th>Z</th><th>L</th></tr><tr><th>mm x mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>25 x 20</td><td>16</td><td>32</td><td>25</td><td>3</td><td>38</td></tr><tr><td>32 x 20</td><td>16</td><td>41</td><td>25</td><td>6</td><td>44</td></tr><tr><td>32 x 25</td><td>16</td><td>41</td><td>32</td><td>4</td><td>45</td></tr><tr><td>40 x 20</td><td>16</td><td>51</td><td>25</td><td>10</td><td>52</td></tr><tr><td>40 x 25</td><td>16</td><td>51</td><td>32</td><td>8</td><td>53</td></tr><tr><td>50 x 25</td><td>12.5</td><td>60</td><td>32</td><td>13</td><td>63</td></tr><tr><td>50 x 32</td><td>12.5</td><td>60</td><td>41</td><td>9</td><td>62</td></tr><tr><td>63 x 25</td><td>12.5</td><td>76</td><td>32</td><td>19</td><td>76</td></tr><tr><td>63 x 32</td><td>12.5</td><td>76</td><td>41</td><td>16</td><td>76</td></tr><tr><td>90 x 63</td><td>12.5</td><td>106</td><td>76</td><td>24</td><td>113</td></tr><tr><td>90 x 63</td><td>6</td><td>95</td><td>69</td><td>24</td><td>113</td></tr><tr><td>110 x 63</td><td>10</td><td>130</td><td>76</td><td>24</td><td>123</td></tr><tr><td>110 x 63</td><td>6</td><td>117</td><td>69</td><td>24</td><td>123</td></tr><tr><td>140 x 114</td><td>6</td><td>153</td><td>123</td><td>23</td><td>163</td></tr><tr><td>140 x 110</td><td>10</td><td>160</td><td>121</td><td>34</td><td>238</td></tr><tr><td>160 x 110</td><td>10</td><td>175</td><td>121</td><td>40</td><td>272</td></tr><tr><td>160 x 140</td><td>10</td><td>175</td><td>153</td><td>36</td><td>272</td></tr><tr><td>200 x 140</td><td>10</td><td>219</td><td>153</td><td>105</td><td>391</td></tr><tr><td>200 x 160</td><td>10</td><td>219</td><td>175</td><td>77</td><td>391</td></tr><tr><td>225 x 160</td><td>10</td><td>247</td><td>175</td><td>136</td><td>468</td></tr><tr><td>225 x 200</td><td>10</td><td>247</td><td>219</td><td>86</td><td>468</td></tr><tr><td>250 x 200</td><td>10</td><td>274</td><td>219</td><td>78</td><td>510</td></tr><tr><td>250 x 225</td><td>10</td><td>274</td><td>247</td><td>60</td><td>510</td></tr><tr><td>315 x 225</td><td>10</td><td>345</td><td>247</td><td>53</td><td>553</td></tr></tbody></table>`,
      },
      "Nối ren ngoài": {
        dim: "Male thread socket PVC.jpg",
        eng: "Male thread socket Plastic thread",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/noi-ren-ngoai",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa (bar)<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>B</th><th>L1</th><th>L</th></tr><tr><th>mm x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20 x ½</td><td>16</td><td>25</td><td>2</td><td>28</td><td>18</td><td>36</td></tr><tr><td>25 x ¾</td><td>16</td><td>32</td><td>2</td><td>34</td><td>20</td><td>41</td></tr><tr><td>32 x 1</td><td>16</td><td>41</td><td>2</td><td>44</td><td>22</td><td>46</td></tr><tr><td>40 x 1¼</td><td>16</td><td>51</td><td>2</td><td>55</td><td>25</td><td>53</td></tr><tr><td>50 x 1½</td><td>12.5</td><td>60</td><td>2</td><td>65</td><td>26</td><td>59</td></tr><tr><td>75 x 2½</td><td>12.5</td><td>87</td><td>16</td><td>102</td><td>34</td><td>105</td></tr></tbody></table>`,
      },
      "Nối ren trong": {
        dim: "Female thread socket PVC.jpg",
        eng: "Female Threaded Socket Plastic thread",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/noi-ren-trong-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th rowspan="2">Thread</th><th>DN </th><th>PN</th><th>D</th><th>Z</th><th>B</th><th>D1</th><th>L1</th><th>L</th></tr><tr><th>mm x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>Plastic</td><td>20 x ¾</td><td>16</td><td>25</td><td>4</td><td>43</td><td>37</td><td>18</td><td>38</td></tr><tr><td>Plastic</td><td>25 x ½</td><td>16</td><td>32</td><td>3</td><td>35</td><td>30</td><td>16</td><td>38</td></tr><tr><td>Plastic</td><td>32 x 1</td><td>16</td><td>41</td><td>2</td><td>54</td><td>46</td><td>20</td><td>43</td></tr><tr><td>Plastic</td><td>40 x 1¼</td><td>16</td><td>51</td><td>2</td><td>64</td><td>55</td><td>23</td><td>51</td></tr><tr><td>Plastic</td><td>50 x 1½</td><td>12.5</td><td>60</td><td>7</td><td>74</td><td>66</td><td>20</td><td>43</td></tr><tr><td>Plastic</td><td>75 x 2½</td><td>12.5</td><td>87</td><td>5</td><td>102</td><td>91</td><td>32</td><td>101</td></tr><tr><td>Brass</td><td>20 x ½</td><td>16</td><td>25</td><td>1</td><td>35</td><td>30</td><td>16</td><td>33</td></tr><tr><td>Brass</td><td>20 x ¾</td><td>16</td><td>25</td><td>1</td><td>43</td><td>30</td><td>18</td><td>38</td></tr><tr><td>Brass</td><td>25 x ¾</td><td>16</td><td>32</td><td>1</td><td>43</td><td>37</td><td>18</td><td>38</td></tr></tbody></table>`,
      },
      "Nắp khóa": {
        dim: "End cap PVC.jpg",
        eng: "End cap",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/nap-khoa-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN </th><th>PN</th><th>D</th><th>Z</th><th>L</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20</td><td>16</td><td>25</td><td>2</td><td>20</td></tr><tr><td>25</td><td>16</td><td>32</td><td>2</td><td>24</td></tr><tr><td>32</td><td>16</td><td>41</td><td>2</td><td>28</td></tr><tr><td>40</td><td>16</td><td>51</td><td>2</td><td>33</td></tr><tr><td>50</td><td>12.5</td><td>60</td><td>2</td><td>38</td></tr><tr><td>63</td><td>12.5</td><td>76</td><td>2</td><td>46</td></tr><tr><td>75</td><td>12.5</td><td>88</td><td>2</td><td>55</td></tr><tr><td>90</td><td>12.5</td><td>106</td><td>2</td><td>64</td></tr><tr><td>110</td><td>12.5</td><td>130</td><td>28</td><td>77</td></tr><tr><td>140</td><td>6</td><td>153</td><td>35</td><td>111</td></tr><tr><td>140</td><td>10</td><td>162</td><td>41</td><td>117</td></tr><tr><td>160</td><td>6</td><td>176</td><td>39</td><td>125</td></tr><tr><td>200</td><td>6</td><td>214</td><td>49</td><td>155</td></tr></tbody></table>`
      },
      "Bạc chuyển bậc (Nối rút ngắn)": {
        dim: "Reduced bush PVC.jpg",
        eng: "Reduced bush",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        ref: "#",
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>L</th></tr><tr><th>mm x mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>75 x 60</td><td>12.5</td><td>75</td><td>10</td><td>73</td></tr><tr><td>90 x 75</td><td>12.5</td><td>99</td><td>20</td><td>64</td></tr><tr><td>110 x 60</td><td>10</td><td>110</td><td>25</td><td>88</td></tr></tbody></table>`
      },
      "Khớp nối sống (rắc co)": {
        dim: "Set of barrel union PVC.jpg",
        eng: "Set of barrel union",
        ref: "#",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>D1</th><th>Z</th><th>L</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>50</td><td>12.5</td><td>56</td><td>87</td><td>24</td><td>134</td></tr><tr><td>63</td><td>12.5</td><td>69</td><td>100</td><td>29</td><td>155</td></tr></tbody></table>`
      },
      "Co 90°": {
        dim: "90° Elbow PVC.jpg",
        eng: "90° Elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/co-90-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20</td><td>16</td><td>25</td><td>10</td><td>26</td></tr><tr><td>25</td><td>16</td><td>32</td><td>13</td><td>32</td></tr><tr><td>32</td><td>16</td><td>41</td><td>16</td><td>38</td></tr><tr><td>40</td><td>16</td><td>51</td><td>20</td><td>46</td></tr><tr><td>50</td><td>12.5</td><td>60</td><td>25</td><td>56</td></tr><tr><td>50</td><td>6</td><td>55</td><td>25</td><td>56</td></tr><tr><td>63</td><td>12.5</td><td>76</td><td>32</td><td>70</td></tr><tr><td>63</td><td>6</td><td>69</td><td>32</td><td>70</td></tr><tr><td>75</td><td>12.5</td><td>88</td><td>38</td><td>82</td></tr><tr><td>75</td><td>6</td><td>79</td><td>38</td><td>82</td></tr><tr><td>90</td><td>12.5</td><td>106</td><td>45</td><td>96</td></tr><tr><td>90</td><td>6</td><td>95</td><td>45</td><td>96</td></tr><tr><td>110</td><td>10</td><td>122</td><td>55</td><td>139</td></tr><tr><td>110</td><td>3</td><td>120</td><td>55</td><td>105</td></tr><tr><td>140</td><td>10.5</td><td>155</td><td>70</td><td>174</td></tr><tr><td>140</td><td>6</td><td>153</td><td>70</td><td>135</td></tr><tr><td>160</td><td>10</td><td>177</td><td>80</td><td>212</td></tr><tr><td>160</td><td>6</td><td>175</td><td>80</td><td>160</td></tr><tr><td>200</td><td>10</td><td>223</td><td>114</td><td>220</td></tr><tr><td>200</td><td>6</td><td>214</td><td>109</td><td>215</td></tr><tr><td>225</td><td>6</td><td>243</td><td>114</td><td>235</td></tr><tr><td>225</td><td>10</td><td>261</td><td>116</td><td>261</td></tr></tbody></table>`,
      },
      "Co 90° ren trong (ren thau)": {
        dim: "Female thread 90° elbow PVC.jpg",
        eng: "Female thread 90° elbow Brass thread",
        ref: "#",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>B</th><th>D1</th><th>L1</th><th>Z1</th><th>H1</th></tr><tr><th>mm x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20 x ½</td><td>16</td><td>25</td><td>10</td><td>26</td><td>35</td><td>30</td><td>16</td><td>11</td><td>27</td></tr><tr><td>25 x ¾</td><td>16</td><td>32</td><td>13</td><td>32</td><td>43</td><td>37</td><td>18</td><td>14</td><td>32</td></tr></tbody></table>`
      },
      "Co 90° rút": {
        dim: "90° Reducing Elbow PVC.jpg",
        eng: "90° Reducing Elbow",
        ref: "#",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th></tr><tr><th>mm x mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><th>25 x 20</th><th>16</th><th>32</th><th>13</th><th>32</th><th>25</th><th>10</th><th>26</th></tr><tr><th>32 x 25</th><th>16</th><th>41</th><th>16</th><th>38</th><th>32</th><th>13</th><th>32</th></tr><tr><th>75 x 60</th><th>6</th><th>80</th><th>20</th><th>85</th><th>66</th><th>15</th><th>45</th></tr><tr><th>140 x 114</th><th>6</th><th>153</th><th>76</th><th>136</th><th>123</th><th>63</th><th>113</th></tr></tbody></table>`
      },
      "Co 90° ba nhánh": {
        dim: "Three-socket 90° Elbow PVC.jpg",
        eng: "Three-socket 90° Elbow",
        ref: "#",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20</td><td>16</td><td>25</td><td>10</td><td>26</td></tr><tr><td>25</td><td>16</td><td>32</td><td>13</td><td>32</td></tr></tbody></table>`
      },
      "Co 45°": {
        dim: "45° Elbow PVC.jpg",
        eng: "45° Elbow",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/co-45-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20</td><td>16</td><td>25</td><td>5</td><td>21</td></tr><tr><td>25</td><td>16</td><td>32</td><td>6</td><td>25</td></tr><tr><td>32</td><td>16</td><td>41</td><td>7</td><td>29</td></tr><tr><td>40</td><td>16</td><td>51</td><td>9</td><td>35</td></tr><tr><td>50</td><td>12.5</td><td>60</td><td>11</td><td>42</td></tr><tr><td>50</td><td>6</td><td>55</td><td>11</td><td>42</td></tr><tr><td>63</td><td>12.5</td><td>76</td><td>13</td><td>51</td></tr><tr><td>63</td><td>6</td><td>69</td><td>13</td><td>51</td></tr><tr><td>75</td><td>12.5</td><td>88</td><td>16</td><td>60</td></tr><tr><td>75</td><td>3</td><td>79</td><td>16</td><td>60</td></tr><tr><td>90</td><td>12.5</td><td>106</td><td>19</td><td>70</td></tr><tr><td>90</td><td>3</td><td>95</td><td>19</td><td>70</td></tr><tr><td>110</td><td>6</td><td>122</td><td>13</td><td>107</td></tr><tr><td>110</td><td>3</td><td>120</td><td>23</td><td>73</td></tr><tr><td>140</td><td>10</td><td>155</td><td>29</td><td>133</td></tr><tr><td>140</td><td>6</td><td>153</td><td>29</td><td>94</td></tr><tr><td>160</td><td>10</td><td>177</td><td>33</td><td>165</td></tr><tr><td>160</td><td>6</td><td>175</td><td>34</td><td>114</td></tr></tbody></table>`,
      },
      "Chữ T": {
        dim: "Tee PVC.jpg",
        eng: "Tee",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/chu-t-2",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20</td><td>16</td><td>25</td><td>10</td><td>26</td></tr><tr><td>25</td><td>16</td><td>32</td><td>13</td><td>32</td></tr><tr><td>32</td><td>16</td><td>41</td><td>16</td><td>38</td></tr><tr><td>40</td><td>16</td><td>51</td><td>20</td><td>46</td></tr><tr><td>50</td><td>12.5</td><td>60</td><td>25</td><td>56</td></tr><tr><td>50</td><td>6</td><td>55</td><td>25</td><td>56</td></tr><tr><td>63</td><td>12.5</td><td>76</td><td>32</td><td>70</td></tr><tr><td>63</td><td>6</td><td>69</td><td>32</td><td>70</td></tr><tr><td>75</td><td>12.5</td><td>88</td><td>38</td><td>82</td></tr><tr><td>75</td><td>3</td><td>79</td><td>38</td><td>82</td></tr><tr><td>90</td><td>12.5</td><td>106</td><td>45</td><td>96</td></tr><tr><td>90</td><td>3</td><td>95</td><td>45</td><td>96</td></tr><tr><td>110</td><td>10</td><td>122</td><td>55</td><td>139</td></tr><tr><td>110</td><td>6</td><td>120</td><td>55</td><td>105</td></tr><tr><td>140</td><td>12.5</td><td>155</td><td>70</td><td>174</td></tr><tr><td>140</td><td>6</td><td>153</td><td>77</td><td>153</td></tr><tr><td>160</td><td>10</td><td>177</td><td>80</td><td>212</td></tr><tr><td>160</td><td>6</td><td>175</td><td>80</td><td>160</td></tr><tr><td>200</td><td>10</td><td>222</td><td>114</td><td>220</td></tr><tr><td>200</td><td>6</td><td>214</td><td>108</td><td>214</td></tr><tr><td>250</td><td>6</td><td>267</td><td>134</td><td>265</td></tr><tr><td>225</td><td>10</td><td>251</td><td>113</td><td>258</td></tr><tr><td>225</td><td>6</td><td>246</td><td>113</td><td>218</td></tr></tbody></table>`,
      },
      "Chữ T ren trong (ren thau)": {
        dim: "Threaded female T PVC.png",
        eng: "Threaded female T Brass thread",
        ref: "#",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>B</th><th>D1</th><th>L1</th><th>Z1</th><th>H1</th></tr><tr><th>mm x inch</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>20 x ½</td><td>16</td><td>25</td><td>10</td><td>26</td><td>35</td><td>30</td><td>16</td><td>11</td><td>27</td></tr><tr><td>25 x ¾</td><td>16</td><td>32</td><td>13</td><td>32</td><td>43</td><td>37</td><td>18</td><td>14</td><td>32</td></tr></tbody></table>`,
      },
      "Chữ Y - T 45°": {
        dim: "Y - T 45° PVC.jpg",
        eng: "Y - T 45°",
        ref: "#",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th><th>Z2</th><th>H2</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>63 x 63</td><td>6</td><td>69</td><td>13</td><td>51</td><td>69</td><td>77</td><td>115</td><td>77</td><td>115</td></tr><tr><td>75 x 75</td><td>5</td><td>79</td><td>16</td><td>60</td><td>79</td><td>92</td><td>136</td><td>92</td><td>136</td></tr><tr><td>90 x 90</td><td>6</td><td>95</td><td>19</td><td>70</td><td>95</td><td>110</td><td>161</td><td>110</td><td>161</td></tr><tr><td>110 x 110</td><td>6</td><td>120</td><td>23</td><td>73</td><td>120</td><td>133</td><td>183</td><td>133</td><td>183</td></tr><tr><td>140 x 140</td><td>6</td><td>153</td><td>29</td><td>94</td><td>153</td><td>170</td><td>235</td><td>170</td><td>235</td></tr><tr><td>160 x 160</td><td>6</td><td>175</td><td>34</td><td>114</td><td>175</td><td>194</td><td>274</td><td>194</td><td>274</td></tr><tr><td>140 x 90*</td><td>6</td><td>153</td><td>6</td><td>82</td><td>97</td><td>167</td><td>218</td><td>159</td><td>235</td></tr><tr><td>140 x 114*</td><td>6</td><td>153</td><td>31</td><td>107</td><td>123</td><td>186</td><td>250</td><td>181</td><td>257</td></tr><tr><td>140 x 114*</td><td>10</td><td>162</td><td>34</td><td>110</td><td>133</td><td>211</td><td>295</td><td>206</td><td>282</td></tr><tr><td>200 x 200</td><td>6</td><td>214</td><td>68</td><td>174</td><td>214</td><td>300</td><td>406</td><td>300</td><td>406</td></tr></tbody></table>`,
      },
      "Chữ T rút": {
        dim: "Reducing T PVC.jpg",
        eng: "Reducing T",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/chu-t-rut-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th></tr><tr><th>mm x mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>25 x 20</td><td>16</td><td>32</td><td>10</td><td>29</td><td>25</td><td>13</td><td>29</td></tr><tr><td>32 x 20</td><td>16</td><td>41</td><td>10</td><td>32</td><td>25</td><td>16</td><td>32</td></tr><tr><td>32 x 25</td><td>16</td><td>41</td><td>13</td><td>35</td><td>32</td><td>16</td><td>35</td></tr><tr><td>40 x 20</td><td>10</td><td>51</td><td>10</td><td>36</td><td>25</td><td>20</td><td>36</td></tr><tr><td>40 x 25</td><td>16</td><td>51</td><td>13</td><td>39</td><td>32</td><td>20</td><td>39</td></tr><tr><td>40 x 32</td><td>10</td><td>51</td><td>16</td><td>42</td><td>41</td><td>20</td><td>42</td></tr><tr><td>63 x 25</td><td>12.5</td><td>76</td><td>13</td><td>51</td><td>32</td><td>32</td><td>51</td></tr><tr><td>63 x 32</td><td>12.5</td><td>76</td><td>16</td><td>54</td><td>41</td><td>32</td><td>54</td></tr><tr><td>63 x 40</td><td>12.5</td><td>76</td><td>20</td><td>58</td><td>51</td><td>32</td><td>58</td></tr><tr><td>90 x 63</td><td>12.5</td><td>106</td><td>32</td><td>83</td><td>76</td><td>45</td><td>83</td></tr><tr><td>90 x 63</td><td>3</td><td>95</td><td>32</td><td>83</td><td>69</td><td>45</td><td>83</td></tr><tr><td>110 x 63</td><td>10</td><td>130</td><td>32</td><td>93</td><td>76</td><td>55</td><td>93</td></tr><tr><td>110 x 63</td><td>3</td><td>117</td><td>32</td><td>93</td><td>69</td><td>55</td><td>93</td></tr><tr><td>140 x 90</td><td>6</td><td>153</td><td>55</td><td>119</td><td>97</td><td>68</td><td>119</td></tr><tr><td>140 x 90</td><td>6</td><td>153</td><td>53</td><td>129</td><td>98</td><td>75</td><td>126</td></tr><tr><td>140 x 114</td><td>10</td><td>162</td><td>71</td><td>147</td><td>133</td><td>81</td><td>165</td></tr><tr><td>140 x 114</td><td>6</td><td>153</td><td>63</td><td>139</td><td>123</td><td>76</td><td>140</td></tr><tr><td>160 x 90</td><td>6</td><td>175</td><td>53</td><td>139</td><td>98</td><td>85</td><td>136</td></tr></tbody></table>`,
      },
      "Chữ T cong": {
        dim: "90° turn lateral tee PVC.jpg",
        eng: "90° turn lateral tee",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/t-cong-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>Z1</th><th>H1</th><th>Z2</th><th>H2</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>63</td><td>3</td><td>69</td><td>24</td><td>62</td><td>70</td><td>108</td><td>65</td><td>103</td></tr><tr><td>140</td><td>6</td><td>153</td><td>84</td><td>160</td><td>94</td><td>170</td><td>97</td><td>173</td></tr><tr><td>140</td><td>10</td><td>162</td><td>82</td><td>158</td><td>112</td><td>188</td><td>125</td><td>201</td></tr><tr><td>200</td><td>6</td><td>214</td><td>100</td><td>205</td><td>167</td><td>275</td><td>143</td><td>249</td></tr></tbody></table>`,
      },
      "Chữ T cong rút": {
        dim: "Elbow Reducing Pipe (T-bend) PVC.jpg",
        eng: "Elbow Reducing Pipe (T-bend)",
        ref: "https://binhminhplastic.com.vn/san-pham/pvc-u/phu-tung-pvc-u/phu-tung-pvc-u-he-met/t-cong-rut-1",
        desc: `
        <b>DN</b>: Kích thước danh nghĩa<br>
        <b>PN</b>: Áp suất danh nghĩa<br>
        `,
        table: `<table><thead><tr><th>DN</th><th>PN</th><th>D</th><th>Z</th><th>H</th><th>D1</th><th>Z1</th><th>H1</th><th>Z2</th><th>H2</th></tr><tr><th>mm</th><th>bar</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>140 x 90</td><td>10</td><td>162</td><td>55</td><td>131</td><td>103</td><td>72</td><td>148</td><td>112</td><td>176</td></tr><tr><td>140 x 90</td><td>6</td><td>153</td><td>51</td><td>127</td><td>97</td><td>63</td><td>139</td><td>103</td><td>154</td></tr><tr><td>140 x 114</td><td>10</td><td>162</td><td>68</td><td>144</td><td>133</td><td>92</td><td>168</td><td>119</td><td>203</td></tr><tr><td>140 x 114</td><td>6</td><td>153</td><td>62</td><td>138</td><td>123</td><td>79</td><td>155</td><td>110</td><td>174</td></tr><tr><td>140 x 110</td><td>6</td><td>153</td><td>70</td><td>153</td><td>117</td><td>91</td><td>177</td><td>62</td><td>160</td></tr><tr><td>160 x 110</td><td>6</td><td>178</td><td>67</td><td>153</td><td>121</td><td>112</td><td>173</td><td>91</td><td>177</td></tr></tbody></table>`,
      },
    },
  }
};

function updateSelect() {
  const brandSel = document.getElementById('brand');
  const productSel = document.getElementById('product');
  const sysSel = document.getElementById('system');
  let resultSel = document.getElementById('result');
  const dimSel = document.getElementById('dimension');
  const descSel = document.getElementById('description');
  const refSel = document.getElementById('ref');
  // Dynamically populate dropdown menu
  for (let x in productMap) {
    brandSel.options[brandSel.options.length] = new Option(x, x);
  }

  brandSel.onchange = function(){
    // Reset dropdown
    sysSel.length = 1;
    productSel.length = 1;
    refSel.style.display = 'none';
    descSel.innerHTML = "";
    dimSel.style.display = 'none';
    resultSel.innerHTML = "";
    // Dynamically populate dropdown menu
    for (let x in productMap[this.value]) {
      sysSel.options[sysSel.options.length] = new Option(x, x);
    }
  } 

  sysSel.onchange = function(){
    // Reset dropdown
    productSel.length = 1;
    refSel.style.display = 'none';
    descSel.innerHTML = "";
    dimSel.style.display = 'none';
    resultSel.innerHTML = "";
    // Dynamically populate dropdown menu
    for (let x in productMap[brandSel.value][this.value]) {
      productSel.options[productSel.options.length] = new Option(x, x);
    }
  } 

  productSel.onchange = function(){
    const db = productMap[brandSel.value][sysSel.value][this.value];
    refSel.style.display = 'block';
    refSel.href = db["ref"];
    descSel.innerHTML = db["eng"]+"<br>"+db["desc"];
    dimSel.style.display = 'inline';
    dimSel.src = `../assets/img/${db["dim"]}`;
    resultSel.innerHTML = db["table"];
  }
}

// Initialize dropdown on load
window.onload = updateSelect;