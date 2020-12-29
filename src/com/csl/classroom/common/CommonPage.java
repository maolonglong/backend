package com.csl.classroom.common;

import com.github.pagehelper.PageInfo;
import lombok.Data;

import java.util.List;

/**
 * @author MaoLongLong
 * @date 2020-12-26 16:25
 */
@Data
public class CommonPage<T> {

    private Integer pageNum;
    private Integer pageSize;
    private Integer pageCount;
    private Long total;
    private List<T> list;

    public static <T> CommonPage<T> restfulPage(PageInfo<T> pageInfo) {
        CommonPage<T> page = new CommonPage<>();
        page.setPageNum(pageInfo.getPageNum());
        page.setPageSize(pageInfo.getSize());
        page.setPageCount(pageInfo.getPages());
        page.setTotal(pageInfo.getTotal());
        page.setList(pageInfo.getList());
        return page;
    }
}
