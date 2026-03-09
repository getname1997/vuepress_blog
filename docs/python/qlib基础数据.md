- '$open'：开盘价
- '$high'：最高价
- '$low'：最低价
- '$close'：收盘价
- '$volume'：成交量
- '$vwap'：成交量加权平均价

```
'$open/Ref($close,1)-1'      # 开盘涨跌幅
'$high/Ref($close,1)-1'      # 最高涨跌幅
'$low/Ref($close,1)-1'       # 最低涨跌幅
'$close/Ref($close,1)-1'     # 收盘涨跌幅
'$vwap/Ref($vwap,1)-1'       # VWAP涨跌幅
'Mean($close, 5)'     # 5日均线
'Mean($close, 10)'    # 10日均线
'Mean($close, 20)'    # 20日均线
'Mean($close, 60)'    # 60日均线
'EMA($close, 12)'     # 12日指数移动平均
'Ref($close, 1)'          # 前一日收盘价
'Ref($close, 5)'          # 前5日收盘价
'$close/Ref($close, 5)-1' # 5日收益率
'$close/Ref($close, 20)-1'# 20日收益率
'$close/Ref($close, 60)-1'# 60日收益率
'Mean($volume, 5)'        # 5日平均成交量
'Mean($volume, 20)'       # 20日平均成交量
'$volume/Mean($volume,20)-1'  # 成交量比
'Ref(feature, n)'     # 前n期的值
'Mean(feature, n)'    # n期均值
'Std(feature, n)'     # n期标准差
'Skew(feature, n)'    # n期偏度
'Kurt(feature, n)'    # n期峰度
'Max(feature, n)'     # n期最大值
'Min(feature, n)'     # n期最小值
'Sum(feature, n)'     # n期求和
'EMA(feature, n)'     # n期指数移动平均
'Rank(feature)'       # 横截面排序
'Delta(feature, n)'   # n期变化量
```

