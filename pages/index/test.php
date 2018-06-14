<?php
    public function getGoodInfo(Request $request)
    {
            $goods_datas  = $this->Resource->get();
    
            return response()->json(['status' => 'success','code' => 200,'message' => '获取成功','data'=>$goods_datas]);
    }
>