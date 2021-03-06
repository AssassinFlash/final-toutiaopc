import { getArticles, getArticleChannels } from '@/api/article'

export async function useArticleChannels () {
  const res = await getArticleChannels()
  return res.data
}

export function useTableColumns () {
  return [
    {
      dataIndex: 'cover',
      title: '封面',
      align: 'center',
      width: '20%',
      slots: {
        customRender: 'image'
      }
    },
    {
      dataIndex: 'title',
      title: '标题',
      width: '25%'
    },
    {
      dataIndex: 'status',
      title: '状态',
      width: '15%',
      slots: {
        customRender: 'status'
      }
    },
    {
      dataIndex: 'pubdate',
      title: '发布时间',
      align: 'center',
      width: '20%'
    },
    {
      data: 'methods',
      title: '操作',
      align: 'center',
      slots: {
        customRender: 'action'
      }
    }
  ]
}

export async function useTableData (params) {
  const res = await getArticles(params)
  return res.data
}

export function useArticleStatus () {
  return [
    {
      status: 0,
      text: '草稿',
      type: 'default'
    },
    {
      status: 1,
      text: '待审核',
      type: 'processing'
    },
    {
      status: 2,
      text: '审核完成',
      type: 'success'
    },
    {
      status: 3,
      text: '审核失败',
      type: 'error'
    },
    {
      status: 4,
      text: '已删除',
      type: 'warning'
    }
  ]
}
